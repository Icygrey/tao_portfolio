create table if not exists public.tao_reactions (
  id smallint primary key default 1 check (id = 1),
  heart_count integer not null default 0,
  heart_off_count integer not null default 0,
  updated_at timestamptz not null default timezone('utc'::text, now())
);

alter table public.tao_reactions disable row level security;

insert into public.tao_reactions (id, heart_count, heart_off_count)
values (1, 0, 0)
on conflict (id) do nothing;

create or replace function public.bump_tao_reaction(target text)
returns public.tao_reactions
language plpgsql
as $$
declare
  updated_row public.tao_reactions;
begin
  update public.tao_reactions
  set
    heart_count = heart_count + case when target = 'heart' then 1 else 0 end,
    heart_off_count = heart_off_count + case when target = 'heart_off' then -1 else 0 end,
    updated_at = timezone('utc'::text, now())
  where id = 1
  returning * into updated_row;

  return updated_row;
end;
$$;

grant usage on schema public to anon, authenticated;
grant select, update on table public.tao_reactions to anon, authenticated;
grant execute on function public.bump_tao_reaction(text) to anon, authenticated;

do $$
begin
  alter publication supabase_realtime add table public.tao_reactions;
exception
  when duplicate_object then
    null;
end;
$$;
