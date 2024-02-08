import SiteLayout from "@/Layouts/SiteLayout";
import { Link, Head } from "@inertiajs/react";
import { useForm } from '@inertiajs/react';

export default function Create() {
    // Form helper:https://inertiajs.com/forms
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        body: '',
      });
    

      function createPost(e) {
        e.preventDefault()
     //   alert('Çreating post');
         post('/create');


      }

    return (
        <SiteLayout>
            <Head title="Create Post" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">

            <div>create post with Form helper</div>
          
            <form action="#" onSubmit={createPost}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={data.title}
              onChange={e => setData('title', e.target.value)}
            />
            {errors.title && <div>{errors.title}</div>}
          </div>
          <div>
            <label htmlFor="body">Body</label>
            <textarea
              name="body"
              id="body"
              cols="30"
              rows="10"
              value={data.body}
              onChange={e => setData('body', e.target.value)}
            ></textarea>
            {errors.body && <div>{errors.body}</div>}
          </div>
          <div>
            <button>Create Post</button>
          </div>
        </form>
        </div>
        </SiteLayout>
    );
}
