# ToyBox™

### Tool for Building Applications, Internal Tools and Operational Software 

ToyBox is the next layer of software development, building upon our years of experience of creating tools and applications such as <a href="http://meteor.toys">Meteor Toys</a> and <a href="http://www.meteorcandy.com">Meteor Candy</a>.

ToyBox provides utilities for high-performance accounts management, including profiles, roles and groups. In the future, it will provide advanced data management, feature plug-ins and integrations, and the tools to build and generate interfaces and embeddable cards (such as via iFrame embedding).

A key design consideration for ToyBox will be to provide a way for each set of functionality and data to be encapsulated, but to make it easy to move it between apps, devices, services, as well as users and groups.

Another key design consideration is make it easy for other people to develop functionality that can be stored in a catalog, duplicated and imported into other ToyBox applications, like a packaging system.

## Documentation / Target APIs

The following code demonstrates how a RPC can be called. 

```javascript
// On the server
ToyBox.register({
    posts: {
        roles: ["member"],
        rules: ["signedIn", "hasActiveSubscription"],
        tasks: {
            addPost: function (content) {
                var post = Posts.insert({
                    account: Account.getId(),
                    content: content,
                    date: new Date()
                })

                return post;
            },
            removePost: function (postId) {
                var post = Posts.remove({
                    _id: postId
                    account: Account.getId()
                })

                return post;
            }
        }
    }
})
```

The following code demonstrates how data can be published. On the client, this will be optimized to work via Pub/Sub, RPC, or other strategies.

```javascript
ToyBox.publish({
    posts:{
        roles: ["member"],
        rules: ["signedIn", "hasActiveSubscription"],
        reads: {
            recentPosts: {
                collection: "posts",
                query: {},
                limit: 10
            }
        }
    }
})
```

## Project State

In development by and for <a href="http://toyshop.ooo">Toy Shop</a>