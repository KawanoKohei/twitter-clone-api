<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tweet extends Model
{
    use HasFactory;

    protected $fillable = [
        'content',
    ];

    public function index()
    {
        return Tweet::query()
            ->orderBy('updated_at','desc')
            ->get();
    }
}
