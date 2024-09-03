<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Password Checker</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    <!-- 1. Import "input-input-character-checker.js" file -->
    <script src="./assets/js/input-character-checker_1.3.2.js" defer></script>

    <!-- 2. Implement your own JavaScript file -->
    <script src="./assets/js/log-in.js" defer></script>

    <style>
      .max-width-400 {
        max-width: 400px;
      }
    </style>
  </head>
  <body>
    <main>

      <div class="container py-5 max-width-400">
        <div class="my-5"><a href="./"><button class="btn btn-sm btn-primary">Back</button></a></div>
        <h3 class="text-center mb-3">Log In</h3>
        <div class="p-3 border rounded bg-light">
          <?php include './components/log-in.comp.php' ?>
        </div>
      </div>
      
    </main>
  </body>
</html>
