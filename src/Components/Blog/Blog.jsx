const Blog = () => {
  return (
    <div className="bg-base-200">
      <div className="overflow-x-auto mt-20 ms-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Question</th>
              <th>Answer</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Difference between SQL and NoSQL</td>
              <td>
                Data Structure: SQL: SQL databases are relational databases that
                store data in structured tables with predefined schemas. Data is
                organized into rows and columns. NoSQL: NoSQL databases are
                non-relational databases that can store structured,
                semi-structured, or unstructured data. They are more flexible
                and do not require a fixed schema. Schema: SQL: SQL databases
                have a rigid schema where you define the structure of your data
                before inserting it. Changes to the schema can be complex and
                require migrations. NoSQL: NoSQL databases allow for dynamic and
                flexible schemas. You can add new fields to documents or records
                without affecting existing data. Query Language: SQL: SQL
                databases use SQL for querying data, which provides powerful
                querying and data manipulation capabilities, including complex
                joins and transactions. NoSQL: NoSQL databases use various query
                languages, often specific to the database type. Querying can be
                simpler for some use cases but may lack the full range of SQL
                capabilities. Scalability: SQL: SQL databases are typically
                scaled vertically (adding more resources to a single server).
                Horizontal scaling can be challenging and costly. NoSQL: NoSQL
                databases are designed for horizontal scalability. They can
                distribute data across multiple servers, making them suitable
                for handling large volumes of data and high traffic.
                Consistency: SQL: SQL databases provide strong consistency,
                ensuring that data is always in a valid state with ACID
                (Atomicity, Consistency, Isolation, Durability) transactions.
                NoSQL: NoSQL databases often prioritize availability and
                partition tolerance (CAP theorem). Some NoSQL databases offer
                eventual consistency, which may allow for data inconsistencies
                in distributed systems. Use Cases: SQL: SQL databases are
                well-suited for applications that require structured data,
                complex queries, and transactions. They are commonly used in
                financial systems, e-commerce, and applications with rigid data
                schemas. NoSQL: NoSQL databases are suitable for applications
                with changing or evolving data requirements, real-time
                analytics, and high-speed data ingestion. They are often used in
                web and mobile applications, IoT, and big data solutions.{" "}
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>What is JWT, and how does it work?</td>
              <td>
                Token Creation: When a user logs in or authenticates, the server
                generates a JWT containing specific user information (claims),
                such as their user ID, roles, or other relevant data. This
                information is often signed using a secret key known only to the
                server. Token Issuance: The server sends the JWT back to the
                client as a response to a successful login or authentication
                request. The client stores this token, typically in a cookie or
                local storage. Token Transmission: The client includes the JWT
                in subsequent HTTP requests, typically in the "Authorization"
                header using the "Bearer" scheme. This allows the server to
                identify and verify the user associated with the token. Token
                Verification: Upon receiving a request with a JWT, the server
                checks the token's integrity by verifying the signature using
                the secret key. If the signature is valid, the server extracts
                the claims from the token. Access Control: The server uses the
                information within the JWT, such as the user's roles or
                permissions, to make access control decisions. This allows it to
                determine if the user has the necessary privileges to perform
                the requested action. Stateless Authentication: JWTs are
                stateless, meaning the server does not need to maintain session
                data. This scalability and reduced server-side storage make JWTs
                suitable for distributed and microservices-based architectures.
              </td>
            </tr>
            <tr>
              <th>3</th>

              <td>What is the difference between javascript and NodeJS?</td>
              <td>
                Environment: JavaScript: JavaScript is a programming language
                primarily used for client-side web development. It runs in web
                browsers and is used to enhance the interactivity and behavior
                of web pages. Node.js: Node.js is a runtime environment that
                allows you to run JavaScript on the server-side. It is not a
                programming language but rather a runtime built on Chrome's V8
                JavaScript engine. Node.js enables server-side scripting,
                network applications, and building server-side APIs. Use Cases:
                JavaScript: JavaScript in the browser is used for tasks like DOM
                manipulation, handling user events, and making asynchronous
                requests to servers. It's essential for web front-end
                development. Node.js: Node.js is used for server-side scripting,
                backend development, creating RESTful APIs, building real-time
                applications (e.g., chat applications), and running JavaScript
                on servers. APIs and Modules: JavaScript: In the browser,
                JavaScript has access to the Document Object Model (DOM) and
                APIs specific to web development, such as the window object,
                fetch for making HTTP requests, and more. Node.js: Node.js
                provides a set of APIs and built-in modules for server-side
                tasks, including file system operations, network communication,
                and access to the server environment. It also supports the
                CommonJS module system for structuring code. Global Objects:
                JavaScript: In the browser, the global object is typically
                window. It represents the global context for client-side
                scripts. Node.js: In Node.js, the global object is global. It
                provides access to global variables and functions within the
                Node.js runtime environment. Execution Context: JavaScript: In
                the browser, JavaScript code runs in the context of a web page.
                Each tab or window has its own JavaScript context. Node.js:
                Node.js has a single runtime environment where JavaScript code
                runs. It can handle multiple simultaneous connections and
                requests using an event-driven, non-blocking I/O model.
                Ecosystem: JavaScript: JavaScript has a vast ecosystem of
                libraries and frameworks for front-end web development, such as
                React, Angular, and Vue.js. Node.js: Node.js has its ecosystem
                for server-side development, including Express.js for building
                web servers, npm (Node Package Manager) for managing packages,
                and libraries like Mongoose for working with databases.
              </td>
            </tr>
            <tr>
              <th>4</th>
              <td>
                How does NodeJS handle multiple requests at the same time?
              </td>
              <td>
                Event Loop: Node.js uses a single-threaded event loop to manage
                all incoming requests and I/O operations. The event loop
                continuously checks for events (e.g., incoming requests, I/O
                completion) and processes them one at a time. Non-Blocking I/O:
                Node.js relies on non-blocking I/O operations. When a request
                involves I/O, such as reading from a file or making a network
                request, Node.js doesn't wait for the operation to complete.
                Instead, it registers a callback function and continues to
                process other requests. When the I/O operation is finished, the
                callback is executed. Asynchronous Code: Node.js encourages the
                use of asynchronous programming patterns. Developers write code
                using callbacks, Promises, or async/await to handle asynchronous
                operations. This allows multiple tasks to run concurrently
                without blocking the event loop. Event-Driven Architecture:
                Node.js is event-driven, which means it responds to events and
                triggers callback functions when events occur. Events can
                include incoming HTTP requests, database query completions, or
                user interactions. Developers can register event listeners to
                respond to these events. Single-Threaded, Event-Loop Model:
                While Node.js uses a single thread for the event loop, it can
                efficiently manage concurrency because I/O operations are
                offloaded to the underlying system or external services. This
                allows Node.js to handle thousands of simultaneous connections
                without significant overhead. Libuv: Node.js relies on the Libuv
                library to manage the event loop and provide cross-platform
                support for asynchronous I/O operations. Libuv abstracts the
                underlying system-specific details, making Node.js highly
                portable. Clustering: To fully utilize multi-core processors,
                Node.js can be scaled horizontally using clustering. Clustering
                allows multiple Node.js processes to run on different cores,
                with a load balancer distributing incoming requests among them.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Blog;
