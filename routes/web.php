<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');

// Route::get('/example', function () {
//     return view('example');
// });
