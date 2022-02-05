<?php

namespace App\Providers;

use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
        Inertia::share('app.name', config('app.name'));
        Inertia::share('errors', function() {
            return session()->get('errors') ? session()->get('errors')->getBag('default')->getMessages() : (object) [];
        });

        Inertia::share('warning', function() {
            return session()->get('warning') ? session()->get('warning') : null;
        });

        Inertia::share('success', function() {
            return session()->get('success') ? session()->get('success') : null;
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
        Schema::defaultStringLength(191);
    }
}
