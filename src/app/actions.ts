'use server';

import { db } from '@/lib/db';
import { items } from '@/lib/schema';
import { revalidatePath } from 'next/cache';

export async function createItem(formData: FormData) {
  const name = formData.get('name') as string;
  
  try {
    await db.insert(items).values({
      name,
    });
    
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    return { success: false, error: 'Failed to create item' };
  }
} 