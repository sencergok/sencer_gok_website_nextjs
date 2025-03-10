-- Bu SQL sorgusunu Supabase SQL Editöründe çalıştırarak contact_messages tablosunu oluşturabilirsiniz

-- İletişim mesajları tablosu
CREATE TABLE public.contact_messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    read BOOLEAN DEFAULT false NOT NULL
);

-- RLS (Row Level Security) politikaları
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Sadece yetkilendirilmiş kullanıcıların tüm mesajları görmesine izin ver
CREATE POLICY "Authorized users can view all messages" 
ON public.contact_messages FOR SELECT 
TO authenticated 
USING (true);

-- Herkes mesaj gönderebilir
CREATE POLICY "Anyone can insert messages" 
ON public.contact_messages FOR INSERT 
TO anon 
WITH CHECK (true);

-- Sadece yetkilendirilmiş kullanıcılar mesajları güncelleyebilir
CREATE POLICY "Authorized users can update messages" 
ON public.contact_messages FOR UPDATE 
TO authenticated 
USING (true);

