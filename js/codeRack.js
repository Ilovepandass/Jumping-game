const codeSnippets = [
  `for i in range(5):\n  print("Level Up!")`,
  `def greet(name):\n  print("Hello", name)`,
  `items = ["coin", "potion", "key"]\nfor item in items:\n  print(item)`,
];

const random = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
document.getElementById("code-rack").innerHTML =
  `<pre><code>${random}</code></pre>`;
