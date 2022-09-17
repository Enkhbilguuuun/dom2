import fetch from 'node-fetch';

fetch("https://random-data-api.com/api/v2/users?size=100&is_xml=true")
  .then((res) => res.json())
  .then((res) => console.log(res))