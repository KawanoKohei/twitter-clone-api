<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function index(){
        return response()->json(
            [
                "post" => [
                        [
                        "id" => 1,
                        "title" => "テスト１",
                        "content" => "おはよう"
                        ],
                        [
                        "id" => 2,
                        "title" => "テスト２",
                        "content" => "こんにちは"
                        ],
                        [
                        "id" => 3,
                        "title" => "テスト３",
                        "content" => "いただきます"
                        ],
                   ]
                ],
                200,[],
                JSON_UNESCAPED_UNICODE //文字化け対策
            );
    }
}
