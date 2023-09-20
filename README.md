
<h1 align="center">
  <br>
  <a href="https://federitaly.it"><img src="./public/assets/images/logo-blue.png" alt="Federitaly logo" width="200"></a>
  <br>
  Federitaly Web App
  <br>
</h1>

<h4 align="center">A web app to easily visualize certified Italian companies and their certification details.</h4>

<p align="center">
<!-- BADGES HERE -->
<!--  example badge
  <a href="https://badge.fury.io/js/electron-markdownify">
    <img src="https://badge.fury.io/js/electron-markdownify.svg"
         alt="Gitter">
  </a>
-->
</p>

<p align="center">
  <a href="#development">Development</a> •
  <a href="#deploy">Deploy on ICP</a> •
  <a href="#license">License</a>
</p>

<!-- ![screenshot](https://raw.githubusercontent.com/amitmerchant1990/electron-markdownify/master/app/img/markdownify.gif) -->

## Development

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/knobs-dev/federitaly-webapp

# Go into the repository
$ cd federitaly-webapp

# Install dependencies
$ pnpm i

# Run the app in development mode
$ pnpm dev
```

# Deploy on ICP

Deploy on ICP network
```bash
$ pnpm build

$ pnpm icp:deploy <local | prod>
```

> **Note**
> When you run the command `pnpm icp:deploy local`, the icp local environment will automatically start in background. You will need to manually stop it once you're done.

Start local ICP environment
```bash
$ pnpm dfx:start
```

Stop local ICP environment
```bash
$ pnpm dfx:stop
```



## License

Property of KNOBS Srl