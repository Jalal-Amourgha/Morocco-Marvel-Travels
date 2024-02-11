<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../css/style.css">
  <link rel="stylesheet" href="../css/all.min.css">
  <link rel="stylesheet" href="../css/bootstrap.min.css">
  <title>Booking | Morocco Marvel Travel</title>
</head>

<body>

  <!-- N A V B A R -->
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="#"><img src="../images/logo.png" alt="logo" /></a>
      <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <i class="fa-solid fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav text-center ms-auto mb-2 mb-lg-0">
          <li><a href="../../index.php">Home</a></li>
          <li><a href="../pages/about.php">About</a></li>
          <li><a href="../pages/packages.php">Packages</a></li>
          <li><a href="../pages/book.php">Book</a></li>
          <li><a href="../pages/contact.php">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- P A G E - H E A D E R -->
  <div class="page-header">
    <img src="../images/book.jpg" alt="booking img">
    <h1>Packages</h1>
    <div class="svg-box">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#f6f7fb" fill-opacity="1"
          d="M0,224L80,213.3C160,203,320,181,480,186.7C640,192,800,224,960,229.3C1120,235,1280,213,1360,202.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
        </path>
      </svg>
    </div>
  </div>


  <!-- B O O K I N G - S E C T I O N -->
  <section class="booking">
    <div class="container">
      <div class="title-section">
        <h1>Book Your Trip!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <form action="../book form/book_form.php" method="post">
        <div>
          <label for="">Full Name:</label><br>
          <input type="text" name="name" placeholder="enter your name">
        </div>
        <div>
          <label for="">Email:</label><br>
          <input type="text" name="email" placeholder="enter your email">
        </div>
        <div>
          <label for="">Phone:</label><br>
          <input type="number" name="number" placeholder="enter your number">
        </div>
        <div>
          <label for="">Address:</label><br>
          <input type="text" name="address" placeholder="enter your address">
        </div>
        <div>
          <label for="">Where To:</label><br>
          <input type="text" name="location" placeholder="place you want to visit">
        </div>
        <div>
          <label for="">How Many:</label><br>
          <input type="number" min="0" name="guests" placeholder="number of quests">
        </div>
        <div>
          <label for="">Arrival:</label><br>
          <input type="date" name="arrival" min="2024-01-01" max="2025-01-01" placeholder="dd - mm - yyyy">
        </div>
        <div>
          <label for="">Leaving:</label><br>
          <input type="date" name="leaving" min="2024-01-01" max="2025-01-01" placeholder="dd - mm - yyyy">
        </div>
        <button type="" name="send" class="arrow-btn">Send</button>
      </form>

    </div>
  </section>


  <div class="container under-line"></div>

  <!-- F O O T E R - S E C T I O N -->
  <section class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-2 col-md-4 col-sm-6  mb-3">
          <img src="../images/footer-logo.png" alt="logo">
          <p>Morocco Marvel Travels it'an agency for trips.</p>
        </div>
        <div class="col-lg-2 col-md-4 col-sm-6 col-6 mb-3">
          <h4 class="mb-4">Product</h4>
          <ul>
            <li>
              <a href="#">Overview</a>
            </li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Solutions</a></li>
            <li><a href="#">Tutorials</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Release</a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-4 col-sm-6 col-6 mb-3">
          <h4 class="mb-4">Company</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Carriere</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Media Kit</a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-4 col-sm-6 col-6 mb-3">
          <h4 class="mb-4">Resoses</h4>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Newsletter</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Tutorials</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-4 col-sm-6 col-6 mb-3">
          <h4 class="mb-4">Socials</h4>
          <ul>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Linkedin</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">Whatsapp</a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-4 col-sm-6 col-6">
          <h4 class="mb-4">Legal</h4>
          <ul>
            <li><a href="#">Termes</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Cokkies</a></li>
            <li><a href="#">Licenses</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div class="under-line"></div>
      <div class="d-flex justify-content-between">
        <p>&copy; 2024 <span>Morocco Marvel Travels</span> all rights reserved.</p>
        <ul class="d-flex socials">
          <li><i class="fa-brands fa-facebook"></i></li>
          <li><i class="fa-brands fa-square-x-twitter"></i></li>
          <li><i class="fa-brands fa-github"></i></li>
          <li><i class="fa-brands fa-instagram"></i></li>
          <li><i class="fa-brands fa-linkedin"></i></li>
          <li><i class="fa-brands fa-whatsapp"></i></li>
        </ul>
      </div>
    </div>
  </section>

</body>
<script src="../js/main.js"></script>
<script src="../js/all.min.js"></script>
<script src="../js/bootstrap.bundle.min.js"></script>
<script src="https://kit.fontawesome.com/97220a04d8.js" crossorigin="anonymous"></script>

</html>