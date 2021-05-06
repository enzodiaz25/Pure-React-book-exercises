const { useEffect } = require("react");

// This effect will run evert time blogPostId changes
// and on unmount

useEffect(() => {
    // on mount, and every time the blogPostId
    // changes, set up a subscription
    suscribeToNewCommends(blogPostId)

    // on unmount, and every time BEFORE suscribing
    // anew, unsuscribe from the last blogPostId
    return () => unsuscribeFromComments(blogPostId)
}, [blogPostId])

/*
Example:
If, during the first time through this effect blogPostId is 42,
then it will suscribe to comments for post 42 and return a function
the will execute later (every time before useEffect() and on
unmount). Because it's a closure, its blogPostId value is set
when created, so it will unsuscribe the user from blogPostId
42 comments the next time useEffect triggers.

The cycle of effects goes:

mount! effect runs ----> effect cleans up, ----> effect cleans up
                          re-render!             un-mount!
                          effect runs
*/