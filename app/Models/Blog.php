<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Blog extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'post', 'post_excerpt', 'slug', 'user_id', 'featuredImage', 'metaDescription', 'views', 'jsonData'];

    public static function uniqueSlug(string $val)
    {
        $slug = Str::slug($val, '-');
        $exist = Blog::where('slug', 'like', '%' . $slug . '%')->count();

        if ($exist > 0) return $slug . ($exist + 1);

        return $slug;
    }

    public function blogcategories()
    {
        return $this->hasMany(Blogcategory::class, 'blog_id', 'id');
    }

    public function blogtags()
    {
        return $this->hasMany(Blogtag::class, 'blog_id', 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
