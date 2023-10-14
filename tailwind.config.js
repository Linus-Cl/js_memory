/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    extend: {
      colors: {
        'text': '#fef9ec',
        'background': '#140f00',
        'primary': '#73b6ba',
        'secondary': '#563276',
        'accent': '#7dca88',
      },
      backgroundImage: {
        'ape': "url('/images/ape.png')",
        'cat': "url('/images/cat.png')",
        'cutie': "url('/images/cutie.png')",
        'dachshund': "url('/images/dachshund.png')",
        'dax': "url('/images/dax.png')",
        'dear': "url('/images/dear.png')",
        'dog': "url('/images/dog.png')",
        'eagle': "url('/images/eagle.png')",
        'fox': "url('/images/fox.png')",
        'giraffe': "url('/images/giraffe.png')",
        'kangaroo': "url('/images/kangaroo.png')",
        'marter': "url('/images/marter.png')",
        'meerkat': "url('/images/meerkat.png')",
        'panda': "url('/images/panda.png')",
        'parrot': "url('/images/parrot.png')",
        'pavian': "url('/images/pavian.png')",
        'pig': "url('/images/pig.png')",
        'pug': "url('/images/pug.png')",
        'tiger': "url('/images/tiger.png')",
        'varan': "url('/images/varan.png')",
      }
    },
  },
  plugins: [],
}

