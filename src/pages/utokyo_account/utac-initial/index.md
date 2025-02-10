<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>UTokyo Account Initial Setup Site</title>
    <link rel="SHORTCUT ICON" href="./favicon.svg" type="image/x-icon">
    <link rel="stylesheet" href="./styles.css">
    
    <!-- adding Bootstrap 5 for UI components  -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">

    <!-- msal.min.js can be used in the place of msal-browser.js -->
    <script src="./msal-browser.min.js"></script>
</head>

<body>
    <nav class="navbar navbar-expand-sm navbar-dark bg-success navbarStyle">
        <a class="navbar-brand" href="/"> UTokyo Account Inital Setup Site </a>
        <div class="navbar-collapse justify-content-end">
            <button type="button" id="signIn" class="btn btn-secondary" onclick="signIn()">Sign-in</button>
            <button type="button" id="signOut" class="btn btn-success d-none" onclick="signOut()">Sign-out</button>
        </div>
    </nav>
    <br />
    <div class="container test-center">
      <div class="row">
      </div>
      <div class="row">
        <div class="col">
        </div>
        <div class="col">
          <div class="card" style="width: 30rem;">
            <div class="card-body text-center">
              Please press "Sign-in" to setup UTokyo Account.<br />
              <button type="button" id="signIn" class="btn btn-success" onclick="signIn()">Sign-in</button>
            </div>
          </div>
        </div>
        <div class="col">
        </div>
      </div>
      <div class="row">
         <h5 id="welcome-div" class="card-header text-center d-none"></h5>
      </div>
    </div>
    <!-- importing bootstrap.js and supporting js libraries -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
        </script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
        integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
        crossorigin="anonymous"></script>
        
    <!-- importing app scripts (load order is important) -->
    <script type="text/javascript" src="./authConfig.js"></script>
    <script type="text/javascript" src="./ui.js"></script>
    <script type="text/javascript" src="./claimUtils.js"></script>
    <!-- uncomment the above line and comment the line below if you would like to use the redirect flow -->
    <!-- <script type="text/javascript" src="./authPopup.js"></script> i-->
    <script type="text/javascript" src="./authRedirect.js"></script>
</body>

</html>
