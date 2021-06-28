<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Models\Message;
use App\Events\ChatMessage;

class ChatController extends Controller
{
    public function index()
    {
        $fetch = Message::orderBy('id', 'asc')->get();
        $parse = array();
        foreach($fetch as $key => $value)
        {
            $carbon = (new Carbon($value['created_at']))->toDateTimeString();
            $time = explode(' ', $carbon)[1];
            list($hour, $min) = explode(':', $time);
            $parse[$key] = [
                'id' => $value['id'],
                'uname' => $value['user'],
                'msg' => $value['coment'],
                'time' => $hour.':'.$min,
            ];
        }
        return $parse;
    }

    public function create(Request $request)
    {
        Message::create([
            'user' => $request->user,
            'coment' => $request->msg
        ]);
        //pusherの処理
        event(new ChatMessage('Post'));
        return 0;
    }
}
