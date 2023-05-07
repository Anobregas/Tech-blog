const commentFormHandler = async (event) => {
    event.preventDefault();
    console.log("tom")
  
    const comment = document.querySelector('#comment-input').value.trim();
    const id = event.target.getAttribute("data-projectid")
    console.log(id)
    if (comment) {
      const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({ Comment:comment ,project_id:id}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log(response)
        window.location.reload()
       // document.location.replace(`/project/:id`);
      } else {
        alert(response.statusText);
      }
    }
  };

  document
     .querySelector('.leave-comment')
     .addEventListener('submit', commentFormHandler);
