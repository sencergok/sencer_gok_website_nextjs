import { createClient } from "@supabase/supabase-js"

// Supabase URL ve anonim anahtar değerlerini çevre değişkenlerinden alıyoruz
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Hata kontrolü ekleyelim
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase çevre değişkenleri tanımlanmamış!');
}

// Supabase istemcisini oluşturuyoruz
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Mesaj gönderme fonksiyonu
export async function sendContactMessage(name: string, email: string, message: string) {
  try {
    const { data, error } = await supabase.from("contact_messages").insert([{ name, email, message }]).select()

    if (error) {
      throw error
    }

    return { success: true, data }
  } catch (error) {
    console.error("Error sending contact message:", error)
    return { success: false, error }
  }
}
