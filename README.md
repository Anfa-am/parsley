# Parsley
Make HTML great again - client side logicless partials - 
4 KB minified 

# usage
   use a the partial tag to denote any partials you'd like to load in and then run parsely. It'll take care of the rest.

# example
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
        </head>
        <body>
            <partial path="nav.html"></partial>
        </body>
        
        <script type="text/javascript" src="parsley.js"></script>
        <script type="text/javascript">
            parsley();
        </script>
    </html>