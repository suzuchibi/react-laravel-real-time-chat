<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Message;

class MessagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Message::create([
            'user' => 'ユーザーA',
            'coment' => 'ユーザーAの投稿です。こんにちは。'
        ]);
        Message::create([
            'user' => 'ユーザーA',
            'coment' => 'ユーザーAの投稿です。お元気ですか？'
        ]);
        Message::create([
            'user' => 'ユーザーB',
            'coment' => 'ユーザーBの投稿です。元気です。ユーザーCさんはどうですか？'
        ]);
        Message::create([
            'user' => 'ユーザーC',
            'coment' => 'ユーザーCの投稿です。お元気です。'
        ]);
    }
}
