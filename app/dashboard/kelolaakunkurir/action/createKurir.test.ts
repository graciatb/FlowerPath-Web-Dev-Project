// createKurir.test.ts
import { createKurir } from '../action/actions';
import { readUserSession } from '../../../../lib/action/actions';

// Mock the database-related functions
jest.mock('../../../../lib/supabase/server', () => ({
  createSupabaseAdmin: jest.fn().mockResolvedValue({
    auth: {
      admin: {
        createUser: jest.fn().mockResolvedValue({
          error: null,  // Mock successful response
          data: {
            user: {
              id: 'mockedUserId',  // Mocked user ID
            },
          },
        }),
      },
    },
    from: (table: string) => ({
      insert: jest.fn().mockResolvedValue({}),
      update: jest.fn().mockResolvedValue({}),
      delete: jest.fn().mockResolvedValue({}),
    }),
  }),
  createSupabaseServerClient: jest.fn().mockResolvedValue({}),
  createSupabaseServerClientReadOnly: jest.fn().mockResolvedValue({
    auth: {
      getSession: jest.fn().mockResolvedValue({ /* Mock your session data here */ }),
    },
  }),
}));

jest.mock('next/cache', () => ({
  revalidatePath: jest.fn(),
  unstable_noStore: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  redirect: jest.fn(),
}));

// Mock readUserSession to return the expected structure
jest.mock('../../../../lib/action/actions', () => ({
  readUserSession: jest.fn().mockResolvedValue({
    data: {
      session: {
        user: {
          user_metadata: {
            role: 'admin',
          },
        },
      },
    },
  }),
}));

describe('createKurir function', () => {
  it('should do something', async () => {
    // Your test case logic goes here
    const testData = {
      nama: 'John Doe',
      email: 'johndoa@gmail.com',
      password: '123456',
      role: 'kurir' as const,
      confirm: '123456',
    };

    const result = await createKurir(testData);

    // Assert your expectations
    expect(readUserSession).toHaveBeenCalled();
    // Add more assertions based on your specific logic

    // Reset mock functions after each test
    jest.clearAllMocks();
  });
});