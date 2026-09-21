### Phase 1
I used <div> elements to create the two walls and gave each wall a unique ID. Each poem is an <article> with its own unique ID, title, and text. The submission controls use inputs, a textarea, a select, and a button without a form. Unique IDs are important because JavaScript can use them to find and modify specific elements on the page.

### Phase 2
getElementById() returned one specific poem because IDs are unique. My group selection returned multiple poem elements from the West Wall. This makes group selection useful when I want to work with several elements at once.

### Phase 3
I did not have to manually delete the poem from the West Wall. When I called `appendChild()`, the existing node was moved from its old parent to the new parent. I then changed its background color with JavaScript to show that it had been relocated.
