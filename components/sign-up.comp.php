<section class="account">
  <form method="post">
    <input type="hidden" name="csrf_token" value="<?= isset($_SESSION["csrf_token"]) ? $_SESSION["csrf_token"] : '' ?>">
    <?php include './components/check-email.comp.php' ?>
    <div class="mt-3">
      <?php include './components/check-password-icons.comp.php' ?>
    </div>
    <div>
      <button class="btn btn-primary mt-3 btn-submit" type="submit">send</button>
    </div>
  </form>
</section>