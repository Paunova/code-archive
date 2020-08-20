## Install deb packages via command line | Ubuntu

**dpkg** is a package management utility for managing “.deb” (debian) packages

- display package information

  `dpkg -I /path/to/file.deb`

- install package (standalone, no dependencies)

    `sudo dpkg -i /path/to/file.deb`

    auto-install required dependencies - `sudo apt -f install`

- example installation of GlobalProtect VPN

    `sudo dpkg -i /home/spaunova/Downloads/PanGPLinux-5.1.5-c8/GlobalProtect_UI_deb-5.1.5.0-8.deb`
- - -
[Resource]([https://link](https://linuxhint.com/manual_install_deb_package_cli_ubuntu/))