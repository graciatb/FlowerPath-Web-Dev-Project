// action.test.ts

import { signIn, logout } from '../action/actions';
import { createSupabaseServerClient } from '../../../lib/supabase/server';

jest.mock('../../../lib/supabase/server', () => ({
    createSupabaseServerClient: jest.fn(),
  }));

jest.mock('next/navigation', () => ({
    redirect: jest.fn(),
  }));

describe('signIn', () => {
  it('should sign in with provided email and password', async () => {
    const mockSignInWithPassword = jest.fn();
    const mockAuth = {
      signInWithPassword: mockSignInWithPassword,
    };
    const mockSupabase = { auth: mockAuth };
    const mockResult = { /* your mocked result object */ };

    (createSupabaseServerClient as jest.Mock).mockResolvedValue(mockSupabase);
    mockSignInWithPassword.mockResolvedValue(mockResult);

    const result = await signIn({ email: 'ppp@gmail.com', password: '123456' });

    expect(result).toEqual(JSON.stringify(mockResult));
    expect(mockSignInWithPassword).toHaveBeenCalledWith({
      email: 'ppp@gmail.com',
      password: '123456',
    });
  });
});

describe('logout', () => {
    it('should sign out and redirect to /login', async () => {
      const mockSignOut = jest.fn();
      const mockAuth = {
        signOut: mockSignOut,
      };
      const mockSupabase = { auth: mockAuth };
  
      (createSupabaseServerClient as jest.Mock).mockResolvedValue(mockSupabase);
  
      await logout();
  
      expect(mockSignOut).toHaveBeenCalled();
      expect(require('next/navigation').redirect).toHaveBeenCalledWith('/login');
    });
  });