## rAFRateLimit - rAF Based Rate Limiting Library Function

rAFRateLimit is straightforward function that abstracts the common method
of using window.requestAnimationFrame() to "throttle" or "rate limit" the
frequency of calling a target function to a maximum of one call per animation
frame.

This is very useful for rate limiting event handlers triggered by events such as
screen resizing or scrolling, which can fire very rapidly.

Target functions for such events which often impact the DOM will do so at a
maximum rate of one time per screen refresh and will do so smoothly, happening
at regular intervals.

This implementation allows passing through any number of arguments to the
target function, which you will see can be extremely code-efficient in the
examples below.

#### API

`rAFRateLimit(func)`

*   `func` is the function to be rate limited
*   **return value** is a function that when called queues `func` to be called
during the next animation frame, passing through any included arguments, and also
passing the rAF timestamp as the last argument

**NOTE:** This is a *last chance* algorithm.  That is, if multiple calls to
the queuing function happen after a previous call has been queued but before it
has fired, the returned function will keep the originally queued call, not queue
another, but replace the arguments to the single queued call with the new
updated arguments.  Thus, the queue is only one call deep but the arguments
are always the latest when the call is fired.

#### Usage
```javascript
function scroll (e) {
  // do something that affects the DOM
}

var rateLimitedScroll = rAFRateLimit(scroll);

myElement.addEventListener('scroll', function (e) {
    rateLimitedScroll(e);
  }, false);
```
