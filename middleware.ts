import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
	const adminPath = "/dashboard";
	const kurirPath = "/kurir";
	let response = NextResponse.next({
		request: {
			headers: request.headers,
		},
	});

	const supabase = createServerClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			cookies: {
				get(name: string) {
					return request.cookies.get(name)?.value;
				},
				set(name: string, value: string, options: CookieOptions) {
					request.cookies.set({
						name,
						value,
						...options,
					});
					response = NextResponse.next({
						request: {
							headers: request.headers,
						},
					});
					response.cookies.set({
						name,
						value,
						...options,
					});
				},
				remove(name: string, options: CookieOptions) {
					request.cookies.set({
						name,
						value: "",
						...options,
					});
					response = NextResponse.next({
						request: {
							headers: request.headers,
						},
					});
					response.cookies.set({
						name,
						value: "",
						...options,
					});
				},
			},
		}
	);

	const {data:{session},} = await supabase.auth.getSession();

	
	if(!session) {
		if(request.nextUrl.pathname.startsWith(adminPath) || request.nextUrl.pathname.startsWith(kurirPath)){
			const redirectUrl = request.nextUrl.clone()
			redirectUrl.pathname = "/login"
			return NextResponse.redirect(redirectUrl);
		} else {
			return response;
		}
	
	} else if(session?.user.user_metadata.role === "admin" && request.nextUrl.pathname.startsWith(kurirPath)){
		const redirectUrl = request.nextUrl.clone()
		redirectUrl.pathname = adminPath
		return NextResponse.redirect(redirectUrl);
	} else if(session?.user.user_metadata.role === "kurir" && request.nextUrl.pathname.startsWith(adminPath)){
		const redirectUrl = request.nextUrl.clone()
		redirectUrl.pathname = kurirPath
		return NextResponse.redirect(redirectUrl);
	} else {
		return response;
	}

	
}

export const config = {
	matcher:["/dashboard/:path*", "/kurir/:path*", '/((?!api|_next/static|_next/image|favicon.ico).*)']
}