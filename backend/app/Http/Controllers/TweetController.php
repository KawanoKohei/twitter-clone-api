<?php

namespace App\Http\Controllers;

use App\Models\Tweet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class TweetController extends Controller
{
    /**
     * ツイート一覧機能
     *
     * @param Tweet $tweetInstance
     * @return json
     */
    public function index(Tweet $tweetInstance):json
    {
        $tweets = $tweetInstance->index();

        return response()->json(
            $tweets, 200
        );
    }

    /**
     * ツイート保存機能
     *
     * @param Request $request
     * @param Tweet $tweetInstance
     * @return json
     */
    public function store(Request $request, Tweet $tweetInstance):json
    {
        try {
            $tweetInstance->user_id = 5;    //ログイン認証機能追加->ログインユーザーID
            $tweetInstance->content = $request->content;
            $tweetInstance->store();
            $tweets = $tweetInstance->index();
            return response()->json($tweets,201);
        } catch (\Exception $e) {
            Log::error($e);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
