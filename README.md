# auto-tabs

Auto-tabs will generate tabs around a set of elements onload.

## Installation
Simply include the stylesheet in the html header and the javascript (autotabs.min.js) at the end of the body tag.

```html
  <head>
    ...
    <link rel="stylesheet" href="autotabs.css">
  </head>
  ...
```
```html
    ...
    <script src="autotabs.min.js"></script>
  </body>
</html>
```


### Example input structure:
```html
<div class="content">
  <h5>Heading 1</h5>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum ligula turpis, scelerisque condimentum tellus condimentum ut. Duis auctor turpis ut justo blandit molestie.
  <p>Sed lobortis leo ac lorem tristique luctus. Mauris blandit ante id augue tempus auctor. Aliquam cursus id velit at ullamcorper. Duis cursus lacinia ante, quis luctus libero tempor in. Nullam pharetra nunc sit amet tristique ornare. Proin in sagittis ligula, eu dapibus diam. Duis sed neque enim.</p>
  <span>Ut ullamcorper interdum magna, sit amet elementum risus sagittis ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse diam est, dapibus id semper et, luctus vel urna. Nam vitae aliquet diam. Cras porttitor massa urna, sodales cursus mauris egestas nec. In nec mauris neque. Aenean euismod eros id ultricies scelerisque.</span>

  <h5>Heading 2</h5>
  <p>In ut gravida lectus. Integer nec eleifend sem. Nunc vel leo dapibus, varius mauris a, tincidunt risus. Maecenas at vestibulum sem. Aliquam ultrices sollicitudin dui. Mauris luctus ante orci, ut iaculis dui commodo quis. Etiam placerat at massa tincidunt maximus. Aliquam rutrum tellus eu arcu tristique, et mattis enim ullamcorper. Mauris sit amet diam ac nisl mattis elementum. In tempus imperdiet sollicitudin.</p>

  <h5>Heading 3</h5>
  Pellentesque vitae convallis lorem, quis varius lectus. Etiam nec convallis sapien. Quisque id tellus vitae dolor pharetra tincidunt. Etiam pulvinar mauris eros, id auctor erat finibus ut. Phasellus sagittis cursus congue.
  <p>Curabitur accumsan aliquam neque ac venenatis. Maecenas quis metus sollicitudin, sagittis nisl sit amet, mattis mauris. Vestibulum nec porttitor mi. Etiam vehicula nisi suscipit, venenatis felis a, faucibus magna. Aliquam sed maximus libero, eu dictum nulla. Ut eu pharetra risus. Donec ut dapibus erat, ac consequat nisl. Donec velit leo, efficitur sed arcu viverra, tempor sodales ex.</p>
</div>
```

### Usage:
By setting the selector to ```.content > h5``` auto-tabs will generate all tabs above the first ```h5``` and wrap every ```h5``` 