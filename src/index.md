# Core Directives

<style>
    /* Thanks to https://raw.githubusercontent.com/laravel/docs/9.x/collections.md for this neat way to display columns */
    .directive-method-list > p {
        columns: 10.8em 3; -moz-columns: 10.8em 3; -webkit-columns: 10.8em 3;
    }

    .directive-method-list a {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>
<div class="directive-method-list" markdown="1">

[@if](#directive-if)
[@elseif](#directive-if)
[@else](#directive-if)
[@unless](#directive-unless)
[@isset]()
[@empty]()
[@auth]()
[@guest]()
[@production]()
[@hasSection]()
[@sectionMissing]()
[@switch]()
[@for]()
[@foreach]()
[@while]()
[@continue]()
[@break]()
[@php]()
[@class]()
[@checked]()
[@selected]()
[@disabled]()
[@readonly]()
[@required]()
[@include]()
[@includeIf]()
[@includeWhen]()
[@includeUnless]()
[@includeFirst]()
[@each]()
[@once]()
[@pushOnce]()
[@verbatim]()

</div>

<a id="directive-if"></a>

#### `@if` {.directive-method .first-directive-method}

```php
@if (count($records) === 1)
    I have one record!
@elseif (count($records) > 1)
    I have multiple records!
@else
    I don't have any records!
@endif
```

<a id="directive-unless"></a>

#### `@unless`  {.directive-method .first-directive-method}

```php
@unless (Auth::check())
    You are not signed in.
@endunless
```

```php
@isset($records)
    // $records is defined and is not null...
@endisset
```

```php
@empty($records)
    // $records is "empty"...
@endempty
```