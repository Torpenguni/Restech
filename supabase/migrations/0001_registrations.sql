-- Restech registrations schema
-- Tables are written ONLY by the Next.js server (service role key, which bypasses RLS).
-- RLS is enabled with no public policies, so the anon/public key can neither read nor write.

create extension if not exists pgcrypto;

-- Visitors ------------------------------------------------------------------
create table if not exists public.visitors (
  id                uuid primary key default gen_random_uuid(),
  created_at        timestamptz not null default now(),
  first_name        text not null,
  last_name         text not null,
  email             text not null,
  phone             text not null,
  company           text not null,
  job_title         text not null,
  job_function      text not null,
  business_type     text not null,
  outlet_count      text,
  country           text not null,
  interests         text[] not null default '{}',
  consent_marketing boolean not null default false,
  consent_at        timestamptz,
  utm_source        text,
  utm_medium        text,
  utm_campaign      text,
  qr_token          uuid not null default gen_random_uuid() unique,  -- encoded in the badge QR
  checked_in_at     timestamptz
);
create unique index if not exists visitors_email_key on public.visitors (lower(email));
alter table public.visitors enable row level security;

-- Exhibitor leads ---------------------------------------------------------------
create table if not exists public.exhibitor_leads (
  id                uuid primary key default gen_random_uuid(),
  created_at        timestamptz not null default now(),
  first_name        text not null,
  last_name         text not null,
  email             text not null,
  phone             text not null,
  company           text not null,
  job_title         text not null,
  website           text,
  country           text not null,
  segment           text not null,
  participation     text not null,
  stand_size        text,
  products          text not null,
  consent_marketing boolean not null default false,
  consent_at        timestamptz,
  utm_source        text,
  utm_medium        text,
  utm_campaign      text,
  -- sales pipeline
  status            text not null default 'new'
                    check (status in ('new','contacted','proposal','booked','lost')),
  owner             text,
  notes             text
);
create index if not exists exhibitor_leads_status_idx on public.exhibitor_leads (status, created_at desc);
alter table public.exhibitor_leads enable row level security;

-- Newsletter / brochure subscribers --------------------------------------------
create table if not exists public.subscribers (
  id                uuid primary key default gen_random_uuid(),
  created_at        timestamptz not null default now(),
  email             text not null,
  name              text,
  company           text,
  source            text not null check (source in ('newsletter','brochure')),
  consent_marketing boolean not null default true,
  consent_at        timestamptz
);
create unique index if not exists subscribers_email_source_key on public.subscribers (lower(email), source);
alter table public.subscribers enable row level security;
