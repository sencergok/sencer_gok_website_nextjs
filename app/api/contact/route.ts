import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    
    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'İsim, e-posta ve mesaj alanları gereklidir.' },
        { status: 400 }
      );
    }
    
    // Create authenticated Supabase client with service role key
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
    
    if (!supabaseUrl || !supabaseServiceKey) {
      console.error('Missing Supabase environment variables');
      return NextResponse.json(
        { message: 'Sunucu yapılandırma hatası.' },
        { status: 500 }
      );
    }
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    // Insert the contact message
    const { error } = await supabase
      .from('contact_messages')
      .insert([{ name, email, message }]);
      
    if (error) {
      console.error('Error inserting contact message:', error);
      return NextResponse.json(
        { message: 'Mesajınız kaydedilirken bir hata oluştu.' },
        { status: 500 }
      );
    }
    
    return NextResponse.json({ message: 'Mesajınız başarıyla gönderildi!' });
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { message: 'Beklenmeyen bir hata oluştu.' },
      { status: 500 }
    );
  }
}

