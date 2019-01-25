1.  Explain the differences between `client-side routing` and `server-side routing`.
-Server side routing is when we request information from a server and that server sends back a document. This can be really slow if there is large amounts of data being passed and it forces the entire page to reload each time. Client side routing is when routing is handled internally by javascript already on the page. This is  amore modern technique and it doenst have search engine optimization since server side routing has been the standard for  a long time. Client side routing wont make your entire page reload each time you change or add something as it only takes in what it needs.

1.  What does HTTP stand for?
-Hyper Text Transfer Protocol.
1.  What does CRUD stand for?
-Create, Read, Update, Delete.

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
-Create: .post(), Read:.get(), Update: .put(), Delete:.delete()
1.  Mention three tools we can use to make AJAX requests
-We can use axios to make AJAX requests. WE can also use the .fetch function to also make an AJAX request. WE can write out the promise function and that allows us to make an AJAX request. These allow the app to run asynchronously and not have to reload the entire page.