---
page: true
sidebar: true
title: Blade Directives - A reference of core and third party blade template directives
---

# Core Directives

[Laravel Blade Directives](https://laravel.com/docs/9.x/blade#blade-directives) are pretty useful methods for working with Laravel views, this is a quick reference to all core directives.

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
[@isset](#directive-isset)
[@empty](#directive-empty)
[@auth](#directive-auth)
[@guest](#directive-guest)
[@production](#directive-production)
[@hasSection](#directive-hasSection)
[@sectionMissing](#directive-sectionMissing)
[@switch](#directive-switch)
[@for](#directive-for)
[@foreach](#directive-foreach)
[@while](#directive-while)
[@continue](#directive-continue)
[@break](#directive-break)
[@class](#directive-class)
[@checked](#directive-checked)
[@selected](#directive-selected)
[@disabled](#directive-disabled)
[@readonly](#directive-readonly)
[@required](#directive-required)
[@include](#directive-include)
[@includeIf](#directive-includeIf)
[@includeWhen](#directive-includeWhen)
[@includeUnless](#directive-includeUnless)
[@includeFirst](#directive-includeFirst)
[@each](#directive-each)
[@once](#directive-once)
[@pushOnce](#directive-pushOnce)
[@verbatim](#directive-verbatim)

</div>

<a id="directive-if"></a>

#### `@if` {.directive-method .first-directive-method}

```blade
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

```blade
@unless (Auth::check())
    You are not signed in.
@endunless
```

<a id="directive-isset"></a>

#### `@isset` {.directive-method .first-directive-method}

```blade
@isset($records)
    // $records is defined and is not null...
@endisset
```

<a id="directive-empty"></a>

#### `@empty` {.directive-method .first-directive-method}

```blade
@empty($records)
    // $records is "empty"...
@endempty
```

<a id="directive-auth"></a>

#### `@auth` {.directive-method .first-directive-method}

```blade
@auth
    // The user is authenticated...
@endauth
```

<a id="directive-guest"></a>

#### `@guest` {.directive-method .first-directive-method}

```blade 
@guest
    // The user is not authenticated...
@endguest
```

<a id="directive-production"></a>

#### `@production` {.directive-method .first-directive-method}

```blade
@production
    // Production specific content...
@endproduction

@env('staging')
    // The application is running in "staging"...
@endenv
 
@env(['staging', 'production'])
    // The application is running in "staging" or "production"...
@endenv
```

<a id="directive-hasSection"></a>

#### `@hasSection` {.directive-method .first-directive-method}

```blade
@hasSection('navigation')
    <div class="pull-right">
        @yield('navigation')
    </div>
 
    <div class="clearfix"></div>
@endif
```

<a id="directive-sectionMissing"></a>

#### `@sectionMissing` {.directive-method .first-directive-method}

```blade
@sectionMissing('navigation')
    <div class="pull-right">
        @include('default-navigation')
    </div>
@endif
```

<a id="directive-switch"></a>

#### `@switch` {.directive-method .first-directive-method}

```blade
@switch($i)
    @case(1)
        First case...
        @break
 
    @case(2)
        Second case...
        @break
 
    @default
        Default case...
@endswitch
```

<a id="directive-for"></a>

#### `@for` {.directive-method .first-directive-method}

```blade
@for ($i = 0; $i < 10; $i++)
    The current value is {{ $i }}
@endfor
```

<a id="directive-foreach"></a>

#### `@foreach` {.directive-method .first-directive-method}

```blade
@foreach ($users as $user)
    <p>This is user {{ $user->id }}</p>
@endforeach
```

<a id="directive-forelse"></a>

#### `@forelse` {.directive-method .first-directive-method}

```blade 
@forelse ($users as $user)
    <li>{{ $user->name }}</li>
@empty
    <p>No users</p>
@endforelse
```

<a id="directive-while"></a>

#### `@while` {.directive-method .first-directive-method}

```blade 
@while (true)
    <p>I'm looping forever.</p>
@endwhile
```

<a id="directive-continue"></a>

#### `@continue` {.directive-method .first-directive-method}

```blade
@foreach ($users as $user)
    @if ($user->type == 1)
        @continue
    @endif
 
    <li>{{ $user->name }}</li>
 
    @if ($user->number == 5)
        @break
    @endif
@endforeach
```

<a id="directive-break"></a>

#### `@break` {.directive-method .first-directive-method}

```blade
@foreach ($users as $user)
    @continue($user->type == 1)
 
    <li>{{ $user->name }}</li>
 
    @break($user->number == 5)
@endforeach
```

<a id="directive-class"></a>

#### `@class` {.directive-method .first-directive-method}

```blade
@php
    $isActive = false;
    $hasError = true;
@endphp
 
<span @class([
    'p-4',
    'font-bold' => $isActive,
    'text-gray-500' => ! $isActive,
    'bg-red' => $hasError,
])></span>
 
<span class="p-4 text-gray-500 bg-red"></span>
```

<a id="directive-checked"></a>

#### `@checked` {.directive-method .first-directive-method}

```blade
<input type="checkbox"
        name="active"
        value="active"
        @checked(old('active', $user->active)) />
```

<a id="directive-selected"></a>

#### `@selected` {.directive-method .first-directive-method}

```blade
<select name="version">
    @foreach ($product->versions as $version)
        <option value="{{ $version }}" @selected(old('version') == $version)>
            {{ $version }}
        </option>
    @endforeach
</select>
```

<a id="directive-disabled"></a>

#### `@disabled` {.directive-method .first-directive-method}

```blade
<button type="submit" @disabled($errors->isNotEmpty())>Submit</button>
```

<a id="directive-readonly"></a>

#### `@readonly` {.directive-method .first-directive-method}

```blade
<input type="email"
        name="email"
        value="email@laravel.com"
        @readonly($user->isNotAdmin()) />
```

<a id="directive-required"></a>

#### `@required` {.directive-method .first-directive-method}

```blade
<input type="text"
        name="title"
        value="title"
        @required($user->isAdmin()) />
```

<a id="directive-include"></a>

#### `@include` {.directive-method .first-directive-method}

```blade
<div>
    @include('shared.errors')
 
    <form>
        <!-- Form Contents -->
    </form>
</div>
```

<a id="directive-includeIf"></a>

#### `@includeIf` {.directive-method .first-directive-method}

```blade
@includeIf('view.name', ['status' => 'complete'])
```

<a id="directive-includeWhen"></a>

#### `@includeWhen` {.directive-method .first-directive-method}


```blade
@includeWhen($boolean, 'view.name', ['status' => 'complete'])

```

<a id="directive-includeUnless"></a>

#### `@includeUnless` {.directive-method .first-directive-method}

```blade
@includeUnless($boolean, 'view.name', ['status' => 'complete'])

```

<a id="directive-includeFirst"></a>

#### `@includeFirst` {.directive-method .first-directive-method}

```blade
@includeFirst(['custom.admin', 'admin'], ['status' => 'complete'])
```

<a id="directive-each"></a>

#### `@each` {.directive-method .first-directive-method}

```blade
@each('view.name', $jobs, 'job')
@each('view.name', $jobs, 'job', 'view.empty')
```

<a id="directive-once"></a>

#### `@once` {.directive-method .first-directive-method}

```blade
@once
    @push('scripts')
        <script>
            // Your custom JavaScript...
        </script>
    @endpush
@endonce
```
<a id="directive-pushOnce"></a>

#### `@pushOnce` {.directive-method .first-directive-method}

```blade
@pushOnce('scripts')
    <script>
        // Your custom JavaScript...
    </script>
@endPushOnce
```
<a id="directive-verbatim"></a>

#### `@verbatim` {.directive-method .first-directive-method}

```blade
@verbatim
    <div class="container">
        Hello, {{ name }}.
    </div>
@endverbatim
```