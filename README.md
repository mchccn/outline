# Outline

Outline is a light-weight package for parsing Outline.

Outline is our own subset of Jade, so there's nothing special about it.

Example:

```
h2 Welcome to Outline!

h5 Outline is a subset of Jade

p It's very easy to write outlines and documentation.

p.wow You can add a class,

p.amazing.wow or multiple classes.

h4.amazing.wow#cool Even ids work as well.
```

Output:

```html
<h2>Welcome to Outline!</h2>

<h5>Outline is a subset of Jade</h5>

<p>It's very easy to write outlines and documentation.</p>

<p class="wow">You can add a class,</p>

<p class="amazing wow">or multiple classes.</p>

<h4 class="amazing wow" id="cool">Even ids work as well.</h4>
```

Simply import the package and call the function on a string. That's it!
