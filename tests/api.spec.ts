import { test, expect } from '@playwright/test';

test.describe('API Testing - CRUD Operations', () => {

  test('GET Users', async ({ request }) => {
    const response = await request.get(
      'https://jsonplaceholder.typicode.com/users'
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log('GET Response:', body);

    expect(body.length).toBeGreaterThan(0);
  });

  test('POST Create User', async ({ request }) => {
    const response = await request.post(
      'https://jsonplaceholder.typicode.com/users',
      {
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          name: 'Kavya',
          job: 'Tester'
        }
      }
    );

    const body = await response.json();

    console.log('POST Response:', body);

    expect([200, 201]).toContain(response.status());
    expect(body.name).toBe('Kavya');
  });

  test('PUT Update User', async ({ request }) => {
    const response = await request.put(
      'https://jsonplaceholder.typicode.com/users/1',
      {
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          name: 'Kavya Updated',
          job: 'Senior Tester'
        }
      }
    );

    const body = await response.json();

    console.log('PUT Response:', body);

    expect(response.status()).toBe(200);
    expect(body.name).toBe('Kavya Updated');
  });

  test('DELETE User', async ({ request }) => {
    const response = await request.delete(
      'https://jsonplaceholder.typicode.com/users/1'
    );

    console.log('DELETE Status:', response.status());

    expect([200, 204]).toContain(response.status());
  });

});