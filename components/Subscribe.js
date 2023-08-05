import React, { useRef, useState } from 'react';
import styles from "./Subscribe.module.css"

export default function Subscribe() {
  // 1. Create a reference to the input so we can fetch/clear its value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('');

  const subscribe = async (e) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      alert(error)

      return;
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = '';
    alert('Success! 🎉 You are now subscribed to the newsletter.');
  };

  return (
    <form onSubmit={subscribe} className="normal-case flex gap-2 p-4 font-sans flex-col items-center">
      <div className="flex gap-2 font-medium text-sm">
            <input
                id="email-input"
                name="email"
                placeholder="E-mail"
                ref={inputEl}
                required
                type="email"
                className="px-6 py-3 bg-zinc-200 hover:bg-zinc-300 focus:outline-none dark:bg-zinc-700 rounded-md shadow-zinc-900 shadow-md dark:hover:bg-zinc-600"
            />
            <button type="submit" className="px-4 py-3 bg-zinc-200 hover:bg-zinc-300 focus:outline-none dark:bg-zinc-700 rounded-md shadow-zinc-900 shadow-md dark:hover:bg-zinc-600">Subscribe</button>
        </div>
    </form>
  );
}