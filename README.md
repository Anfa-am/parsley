# Parsley
Require external html files with <partial> </partial>
4 KB minified 

# usage

    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
        </head>
        <body>
            <partial path="/views/nav.html"></partial>
        </body>
        
        <script type="text/javascript" src="parsley.js"></script>
        <script type="text/javascript">
            // rendering the partial
            parsley();
        </script>
    </html>
