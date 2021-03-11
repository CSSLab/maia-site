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

<table>
  <tr>
    <th>Channel</th>
    <th>video name</th>
    <th>url</th>
    <th>views</th>
    <th>video</th>
  </tr>
{%- for entry in site.data.media.youtube -%}
<tr>
    <td>{{ entry.creator }}</td>
    <td>{{ entry.name }}</td>
    <td><a href="https://www.youtube.com/watch?v={{ entry.video_id }}">url</a></td>
    <td><i>{{ entry.views }}</i></td>
    <td><iframe width="300" height="200" src="https://www.youtube-nocookie.com/embed/{{ entry.video_id }}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></td>
  </tr>
{%- endfor -%}
</table>

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

<table>
  <tr>
    <th>site</th>
    <th>article name</th>
    <th>url</th>
    <th>archive</th>
    <th>notes</th>
  </tr>
{%- for entry in site.data.media.minor -%}
<tr>
    <td>{{ entry.site }}</td>
    <td>{{ entry.name }}</td>
    <td><a href="{{ entry.url }}">{{ entry.url }}</a></td>
    <td><a href="https://web.archive.org/web/{{ entry.url }}">archive</a></td>
    <td><i>{{ entry.note }}</i></td>
  </tr>
{%- endfor -%}
</table>
