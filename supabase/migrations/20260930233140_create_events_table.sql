/*
# Create events table for "Ça bouge au Club!" section

1. New Tables
- `events`
  - `id` (uuid, primary key)
  - `title` (text, not null) — event name
  - `description` (text, not null) — short description
  - `event_date` (date, not null) — when the event takes place
  - `end_date` (date, nullable) — optional end date for multi-day events
  - `location` (text, not null) — where the event takes place
  - `category` (text, not null default 'général') — event category (tournoi, ligue, formation, social, général)
  - `image_url` (text, nullable) — optional image path
  - `is_published` (boolean, default true) — allows hiding drafts
  - `sort_order` (integer, default 0) — manual ordering
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `events`.
- Public read access (anon + authenticated) — events are visible to all site visitors.
- Insert/update/delete restricted to authenticated users (club administrators).
*/

CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  event_date date NOT NULL,
  end_date date,
  location text NOT NULL,
  category text NOT NULL DEFAULT 'général',
  image_url text,
  is_published boolean NOT NULL DEFAULT true,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_select_events" ON events;
CREATE POLICY "public_select_events" ON events FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "auth_insert_events" ON events;
CREATE POLICY "auth_insert_events" ON events FOR INSERT
  TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_update_events" ON events;
CREATE POLICY "auth_update_events" ON events FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_events" ON events;
CREATE POLICY "auth_delete_events" ON events FOR DELETE
  TO authenticated USING (true);
