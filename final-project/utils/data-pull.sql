-- ALL QUERIES PERFORMED Jan 22, 2018

-- Total-tripsselect count(*)
select count(*)
from trip_events
where timestamp > '9/1/2017'
-- returns 61914


-- trip-events:
select
  trip_id,
  event_type,
  case
    when (event_type = 1) then 'Start trip'
    when (event_type = 2) then 'Pickup'
    when (event_type = 3) then 'Dropoff'
    when (event_type = 4) then 'Begin PM'
    when (event_type = 5) then 'End PM'
    when (event_type = 6) then 'End trip'
    else ':('
  end as "event_type_str",
  "gpsLatitude",
  "gpsLongitude"
from trip_events
where created_at > '9/1/2017'

-- vehicle-info
select
  u.id,
  v.make
from users u
join vehicles v
on v.user_id = u.id
where status = 3 --active

-- trip-meta-data
select
  id,
  billable_miles + personal_miles as "total_miles",
  billable_miles,
  personal_miles,
  created_at,
  (select count(*) from trip_events where trip_id=t.id) as "num_events",
  (select count(*) from trip_events where trip_id=t.id and event_type=2) as "num_clients",
  organization_id,
  zone_id
from trips t
where
  status = 2 and
  created_at > '9/1/2017';

-- breadcrumbs
select
  u.id as "user_id",
  t.id as "trip_id",
  lat,
  lng,
  timestamp
from breadcrumbs b
join trips t
on t.id = b.trip_id
join users u
on u.id = t.user_id
where timestamp > '9/1/2017' AND timestamp < '9/14/2017'
order by trip_id
