# Zenn Trend History API

This is an unofficial API for zenn trends.

## Version 1.0

This version is available from 2024/03/10.

### random

Get 10 items randomly from multiple histories.

```
https://zenn-trend-history.zuk246.net/v1/random
```

And you can put in limit queries. An example is how.

```
https://zenn-trend-history.zuk246.net/v1/random?limit=10
```

Please set a value between 1 and 20.

### list (search)

```
https://zenn-trend-history.zuk246.net/v1/search
```

You can also enter limit queries, date queries, and order queries.

```
https://zenn-trend-history.zuk246.net/v1/search?limit=10
```

```
https://zenn-trend-history.zuk246.net/v1/search?oderBy=creator
```

```
https://zenn-trend-history.zuk246.net/v1/search?date=2024-03-12
```

For limit queries, please enter between 1 and 20.
For oderBy queries, enter one from id, title, creator, description, publishedAt.
And for date, please enter in YYYY-MM-DD format.

### items

You can obtain it using the database's prime key.

```
https://zenn-trend-history.zuk246.net/v1/items/:id
```
