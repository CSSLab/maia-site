---
layout: infopage
title: Media
url: media
---

# Articles
<table>
  <tr>
    <th>site</th>
    <th>article name</th>
    <th>url</th>
    <th>archive</th>
    <th>notes</th>
  </tr>
{%- for entry in site.data.media.articles -%}
<tr>
    <td>{{ entry.site }}</td>
    <td>{{ entry.name }}</td>
    <td><a href="{{ entry.url }}">url</a></td>
    <td><a href="https://web.archive.org/web/{{ entry.url }}">archive</a></td>
    <td><i>{{ entry.note }}</i></td>
  </tr>
{%- endfor -%}
</table>

# Academic
<table>
  <tr>
    <th>site</th>
    <th>article name</th>
    <th>url</th>
    <th>archive</th>
    <th>notes</th>
  </tr>
{%- for entry in site.data.media.academic -%}
<tr>
    <td>{{ entry.site }}</td>
    <td>{{ entry.name }}</td>
    <td><a href="{{ entry.url }}">url</a></td>
    <td><a href="https://web.archive.org/web/{{ entry.url }}">archive</a></td>
    <td><i>{{ entry.note }}</i></td>
  </tr>
{%- endfor -%}
</table>

# Youtube

TODO

# Other

<table>
  <tr>
    <th>site</th>
    <th>article name</th>
    <th>url</th>
    <th>archive</th>
    <th>notes</th>
  </tr>
{%- for entry in site.data.media.other -%}
<tr>
    <td>{{ entry.site }}</td>
    <td>{{ entry.name }}</td>
    <td><a href="{{ entry.url }}">url</a></td>
    <td><a href="https://web.archive.org/web/{{ entry.url }}">archive</a></td>
    <td><i>{{ entry.note }}</i></td>
  </tr>
{%- endfor -%}
</table>

# Minor coverage

[example](https://exbulletin.com/tech/701712/)
