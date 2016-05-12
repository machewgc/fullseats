$(document).ready(function() {
  $("form#addresses").submit(function(event) {
    event.preventDefault();

    var county = parseInt($("#beverage").val());
    var address1 = "";
    var address2 = "";
    var address3 = "";
    var address4 = "";

    switch (county) {
      case 0:
        alert("Please select your county.")
        break;
      case 1:
        address1 = "Sherrie L Riebel";
        address2 = "1 N Washington";
        address3 = "Iola, KS 66749";
        address4 = "coclerk@allencounty.org";
        break;
      case 2:
        address1 = "Phyllis Gettler";
        address2 = "100 E 4th";
        address3 = "Garnett, KS 66032";
        address4 = "AN_county_clerk@wan.kdor.state.ks.us";
        break;
      case 3:
        address1 = "Pauline M Lee";
        address2 = "423 N 5th";
        address3 = "Atchison, KS 66002-1861";
        address4 = "AT_county_clerk@wan.kdor.state.ks.us";
        break;
      case 4:
        address1 = "Debbie Wesley";
        address2 = "120 E Washington";
        address3 = "Medicine Lodge, KS 67104";
        address4 = "BA_county_clerk@wan.kdor.state.ks.us";
        break;
      case 5:
        address1 = "Donna Zimmerman";
        address2 = "1400 Main Street Room 202";
        address3 = "Great Bend, KS 67530";
        address4 = "clerk@bartoncounty.org";
        break;
      case 6:
        address1 = "Kendell Mason";
        address2 = "210 S National";
        address3 = "Ft Scott, KS 66701";
        address4 = "countyclerk@bourboncountyks.org";
        break;
      case 7:
        address1 = "Melissa Gormley";
        address2 = "601 Oregon St";
        address3 = "Hiawatha, KS 66434";
        address4 = "BR_county_clerk@wan.kdor.state.ks.us";
        break;
      case 8:
      address1 = "Don Engels";
      address2 = "205 W Central";
      address3 = "El Dorado, KS 67042";
      address4 = "dengels@bucoks.com";
      break;
      case 9:
      address1 = "Brande Studer";
      address2 = "PO Box 529";
      address3 = "Cottonwood Falls, KS 66845-0547";
      address4 = "clerk@chasecountyks.com";
      break;
      case 10:
      address1 = "Janice A. Fine";
      address2 = "215 N Chautauqua";
      address3 = "Sedan, KS 67361";
      address4 = "cqclerk@gmail.com";
      break;
      case 11:
      address1 = "Rodney Edmondson";
      address2 = "PO Box 14";
      address3 = "Columbus, KS 66725";
      address4 = "rodney.clerk@cherokeecounty-ks.gov";
      break;
      case 12:
      address1 = "Deb Lindsten";
      address2 = "PO Box 985";
      address3 = "St Francis, KS 67756";
      address4 = "CN_county_clerk@wan.kdor.state.ks.us";
      break;
      case 13:
      address1 = "Rebecca Mishler";
      address2 = "PO Box 886";
      address3 = "Ashland, KS 67831";
      address4 = "cacoclrk@ucom.net";
      break;
      case 14:
      address1 = "Kayla Wang";
      address2 = "712 5th Street Suite 102";
      address3 = "Clay Center, KS 67432";
      address4 = "cyclerk@claycountykansas.org";
      break;
      case 15:
      address1 = "Shella Thoman";
      address2 = "811 Washington";
      address3 = "Concordia, KS 66901";
      address4 = "clerk@cloudcountyks.org";
      break;
      case 16:
      address1 = "Angie Kirchner";
      address2 = "110 S 6th Room 202";
      address3 = "Burlington, KS 66839";
      address4 = "CF_county_clerk@wan.kdor.state.ks.us";
      break;
      case 17:
      address1 = "Alice Smith";
      address2 = "201 S New York Box 776";
      address3 = "Coldwater, KS 67029";
      address4 = "CM_county_clerk@wan.kdor.state.ks.us";
      break;
      case 18:
      address1 = "Karen Madison";
      address2 = "321 E. 10th Avenue";
      address3 = "Winfield, KS 67156";
      address4 = "kmadison@cowleycounty.org";
      break;
      case 19:
      address1 = "Don Pyle";
      address2 = "PO Box 249";
      address3 = "Girard, KS 66743-0249";
      address4 = "countyclerk@ckt.net";
      break;
      case 20:
      address1 = "Colleen Geihsler";
      address2 = "PO Box 28";
      address3 = "Oberlin, KS 67749";
      address4 = "DC_county_clerk@wan.kdor.state.ks.us";
      break;
      case 21:
      address1 = "Barb Jones";
      address2 = "PO Box 248";
      address3 = "Abilene, KS 67410";
      address4 = "DK_county_clerk@wan.kdor.state.ks.us";
      break;
      case 22:
      address1 = "Peggy Franken";
      address2 = "PO Box 278";
      address3 = "Troy, KS 66087";
      address4 = "dpcoclerk@rainbowtel.net";
      break;
      case 23:
      address1 = "Jameson (Jamie) Shew";
      address2 = "1100 Massachusetts St";
      address3 = "Lawrence, KS 66044";
      address4 = "jshew@douglas-county.com";
      break;
      case 24:
      address1 = "Gina Schuette";
      address2 = "312 Massachusetts";
      address3 = "Kinsley, KS 67547";
      address4 = "edwardsclerk@edwards.kscoxmail.com";
      break;
      case 25:
      address1 = "Vicky D. Wedman";
      address2 = "PO Box 606";
      address3 = "Howard, KS 67349";
      address4 = "ekclerk@sktc.net";
      break;
      case 26:
      address1 = "Donna Maskus";
      address2 = "PO Box 720";
      address3 = "Hays, KS 67601";
      address4 = "dclerk@ellisco.net";
      break;
      case 27:
      address1 = "Shelly Vopat";
      address2 = "210 N Kansas";
      address3 = "Ellsworth, KS 67439";
      address4 = "EWCLERK@KANS.COM";
      break;
      case 28:
      address1 = "Elsa Ulrich";
      address2 = "311 N. 9th St., P.O. Box M";
      address3 = "Garden City, KS 67846";
      address4 = "eulrich@finneycounty.org";
      break;
      case 29:
      address1 = "Debbie Cox";
      address2 = "100 Gunsmoke";
      address3 = "Dodge City, KS 67801";
      address4 = "dcox@fordcounty.net";
      break;
      case 30:
      address1 = "Janet Paddock";
      address2 = "315 S Main";
      address3 = "Ottawa, KS 66067";
      address4 = "jpaddock@franklincoks.org";
      break;
      case 31:
      address1 = "Rebecca Bossemeyer";
      address2 = "200 E. 8th Street";
      address3 = "Junction City, KS 66441";
      address4 = "rebecca.bossemeyer@gearycounty.org";
      break;
      case 32:
      address1 = "Doug Press";
      address2 = "PO Box 128";
      address3 = "Gove, KS 67736";
      address4 = "GO_county_clerk@wan.kdor.state.ks.us";
      break;
      case 33:
      address1 = "Jana Irby";
      address2 = "410 N Pomeroy";
      address3 = "Hill City, KS 67642";
      address4 = "grahcocl@ruraltel.net";
      break;
      case 34:
      address1 = "Sheila Brown";
      address2 = "108 S Glenn";
      address3 = "Ulysses, KS 67880";
      address4 = "clerk@pld.com";
      break;
      case 35:
      address1 = "Ashley Rogers";
      address2 = "PO Box 487";
      address3 = "Cimarron, KS 67835-0487";
      address4 = "arogers@grayco.org";
      break;
      case 36:
      address1 = "Jerri Young";
      address2 = "P.O. Box 277";
      address3 = "Tribune, KS 67879";
      address4 = "GL_county_clerk@wan.kdor.state.ks.us";
      break;
      case 37:
      address1 = "Kathy Robison";
      address2 = "311 N Main";
      address3 = "Eureka, KS 67045";
      address4 = "GW_county_clerk@wan.kdor.state.ks.us";
      break;
      case 38:
      address1 = "Angie Moser";
      address2 = "PO Box 1167";
      address3 = "Syracuse, KS 67878";
      address4 = "hmcoclerk@wbsnet.org";
      break;
      case 39:
      address1 = "Cheryl Adelhardt";
      address2 = "201 N Jennings";
      address3 = "Anthony, KS 67003";
      address4 = "clerk@harpercountyks.gov";
      break;
      case 40:
      address1 = "Rick Piepho";
      address2 = "PO Box 687";
      address3 = "Newton, KS 67114";
      address4 = "rpiepho@harveycounty.com";
      break;
      case 41:
      address1 = "Pam Carrion";
      address2 = "PO Box 518";
      address3 = "Sublette, KS 67877";
      address4 = "hspc@unitedwireless.com";
      break;
      case 42:
      address1 = "Sarah Rains";
      address2 = "500 Main";
      address3 = "Jetmore, KS 67854";
      address4 = "HG_county_clerk@wan.kdor.state.ks.us";
      break;
      case 43:
      address1 = "Kathy Mick";
      address2 = "400 New York";
      address3 = "Holton, KS 66436";
      address4 = "JA_county_clerk@wan.kdor.state.ks.us";
      break;
      case 44:
      address1 = "Linda Buttron";
      address2 = "PO Box 321";
      address3 = "Oskaloosa, KS 66066";
      address4 = "lbuttron@jfcountyks.com";
      break;
      case 45:
      address1 = "Carla J Waugh";
      address2 = "307 N Commercial";
      address3 = "Mankato, KS 66956";
      address4 = "JW_county_clerk@wan.kdor.state.ks.us";
      break;
      case 46:
      address1 = "Ronnie Metsker";
      address2 = "2101 E Kansas City Rd";
      address3 = "Olathe, KS 66061";
      address4 = "Ronnie.Metsker@jocogov.org";
      break;
      case 47:
      address1 = "Jana G. Jenkinson";
      address2 = "PO Box 86";
      address3 = "Lakin, KS 67860";
      address4 = "KE_county_clerk@wan.kdor.state.ks.us";
      break;
      case 48:
      address1 = "Carol Noblit";
      address2 = "130 N Spruce";
      address3 = "Kingman, KS 67068";
      address4 = "KM_county_clerk@wan.kdor.state.ks.us";
      break;
      case 49:
      address1 = "Kristie Cooper";
      address2 = "211 East Florida Avenue";
      address3 = "Greensburg, KS 67054";
      address4 = "kristie.cooper@kiowacountyks.org";
      break;
      case 50:
      address1 = "Peggy Minor";
      address2 = "PO Box 387";
      address3 = "Oswego, KS 67356";
      address4 = "pminor@labettecounty.com";
      break;
      case 51:
      address1 = "Stephanie M. Benzel";
      address2 = "PO Box 788";
      address3 = "Dighton, KS 67839";
      address4 = "LE_county_clerk@wan.kdor.state.ks.us";
      break;
      case 52:
      address1 = "Janet Klasinski";
      address2 = "300 Walnut";
      address3 = "Leavenworth, KS 66048";
      address4 = "jklasinski@leavenworthcounty.org";
      break;
      case 53:
      address1 = "Dawn Harlow";
      address2 = "216 E Lincoln Ave";
      address3 = "Lincoln, KS 67455";
      address4 = "LC_county_clerk@wan.kdor.state.ks.us";
      break;
      case 54:
      address1 = "David L. Lamb";
      address2 = "P.O. Box 350";
      address3 = "Mound City, KS 66056";
      address4 = "dlamb@linncountyks.com";
      break;
      case 55:
      address1 = "Crystal Rucker";
      address2 = "710 W 2nd";
      address3 = "Oakley, KS 67748";
      address4 = "LG_County_Clerk@wan.kdor.state.ks.us";
      break;
      case 56:
      address1 = "Tammy Vopat";
      address2 = "430 Commercial";
      address3 = "Emporia, KS 66801";
      address4 = "lyclerk@lyoncounty.org";
      break;
      case 57:
      address1 = "Tina Spencer";
      address2 = "200 South Third, Suite 104";
      address3 = "Marion, KS 66861";
      address4 = "tspencer@marioncoks.net";
      break;
      case 58:
      address1 = "Sonya L. Stohs";
      address2 = "1201 Broadway";
      address3 = "Marysville, KS 66508";
      address4 = "msctyclk@bluevalley.net";
      break;
      case 59:
      address1 = "Cathy Schmidt";
      address2 = "117 N. Maple";
      address3 = "McPherson, KS 67460";
      address4 = "cschmidt@mcphersoncountyks.us";
      break;
      case 60:
      address1 = "Janet Hale";
      address2 = "PO Box 278";
      address3 = "Meade, KS 67864";
      address4 = "jhale@meadeco.org";
      break;
      case 61:
      address1 = "Janet White";
      address2 = "201 S. Pearl Suite 102";
      address3 = "Paola, KS 66071";
      address4 = "countyclerk@miamicountyks.org";
      break;
      case 62:
      address1 = "Chris Treaster";
      address2 = "PO Box 190";
      address3 = "Beloit, KS 67420";
      address4 = "mitchell_co@nckcn.com";
      break;
      case 63:
      address1 = "Charlotte A. Scott-Schmidt";
      address2 = "PO Box 446";
      address3 = "Independence, KS 67301";
      address4 = "cassschmidt@mgcountyks.org";
      break;
      case 64:
      address1 = "Michelle Garrett";
      address2 = "501 West Main";
      address3 = "Council Grove, KS 66846";
      address4 = "morris@cgtelco.net";
      break;
      case 65:
      address1 = "Gina Castillo";
      address2 = "PO Box 1116";
      address3 = "Elkhart, KS 67950";
      address4 = "mortoncountyclerk@elkhart.com";
      break;
      case 66:
      address1 = "Mary Kay Schultejans";
      address2 = "PO Box 186";
      address3 = "Seneca, KS 66538";
      address4 = "nmclerk@carsoncomm.com";
      break;
      case 67:
      address1 = "Randal E. Neely";
      address2 = "PO Box 138";
      address3 = "Erie, KS 66733";
      address4 = "NO_county_clerk@wan.kdor.state.ks.us";
      break;
      case 68:
      address1 = "Renee Kerr";
      address2 = "202 W Sycamore";
      address3 = "Ness City, KS 67560";
      address4 = "NS_county_clerk@wan.kdor.state.ks.us";
      break;
      case 69:
      address1 = "Robert D. Wyatt";
      address2 = "PO Box 70";
      address3 = "Norton, KS 67654";
      address4 = "NT_county_clerk@wan.kdor.state.ks.us";
      break;
      case 70:
      address1 = "Rhonda Beets";
      address2 = "PO Box 226";
      address3 = "Lyndon, KS 66451-0226";
      address4 = "rbeets@osageco.org";
      break;
      case 71:
      address1 = "Vienna Janis";
      address2 = "PO Box 160";
      address3 = "Osborne, KS 67473";
      address4 = "OB_county_clerk@wan.kdor.state.ks.us";
      break;
      case 72:
      address1 = "Mary Arganbright";
      address2 = "307 N Concord Suite 130";
      address3 = "Minneapolis, KS 67467";
      address4 = "occlerk@nckcn.com";
      break;
      case 73:
      address1 = "Ruth M. Searight";
      address2 = "715 Broadway";
      address3 = "Larned, KS 67550";
      address4 = "PN_county_clerk@wan.kdor.state.ks.us";
      break;
      case 74:
      address1 = "Linda McDowell";
      address2 = "301 State Street";
      address3 = "Phillipsburg, KS 67661";
      address4 = "PL_county_clerk@wan.kdor.state.ks.us";
      break;
      case 75:
      address1 = "Nancy McCarter";
      address2 = "PO Box 187";
      address3 = "Westmoreland, KS 66549";
      address4 = "nmccarter@Pottcounty.org";
      break;
      case 76:
      address1 = "Sherry Kruse";
      address2 = "PO Box 885";
      address3 = "Pratt, KS 67124";
      address4 = "clerk@prattcounty.org";
      break;
      case 77:
      address1 = "Rachel Finley";
      address2 = "607 Main";
      address3 = "Atwood, KS 67730";
      address4 = "rachelfinley12@yahoo.com";
      break;
      case 78:
      address1 = "Donna Patton";
      address2 = "206 West 1st";
      address3 = "Hutchinson, KS 67501";
      address4 = "donna.patton@renogov.org";
      break;
      case 79:
      address1 = "Kathleen L. Marsicek";
      address2 = "1815 M. Street";
      address3 = "Belleville, KS 66935-0429";
      address4 = "kmarsicek@republiccounty.org";
      break;
      case 80:
      address1 = "Alicia Showalter";
      address2 = "101 W Commercial";
      address3 = "Lyons, KS 67554";
      address4 = "ashow@ricecocthse.com";
      break;
      case 81:
      address1 = "Rich Vargo";
      address2 = "110 Courthouse Plaza";
      address3 = "Manhattan, KS 66502";
      address4 = "rvargo@rileycountyks.gov";
      break;
      case 82:
      address1 = "Clara Strutt";
      address2 = "115 N Walnut";
      address3 = "Stockton, KS 67669";
      address4 = "ro_county_clerk@wan.kdor.state.ks.us";
      break;
      case 83:
      address1 = "Corinne Baldwin";
      address2 = "PO Box 220";
      address3 = "LaCrosse, KS 67548";
      address4 = "RH_county_clerk@wan.kdor.state.ks.us";
      break;
      case 84:
      address1 = "Mary Nuss";
      address2 = "PO Box 113";
      address3 = "Russell, KS 67665";
      address4 = "RS_county_clerk@wan.kdor.state.ks.us";
      break;
      case 85:
      address1 = "Donald R. Merriman";
      address2 = "300 W Ash, Ste. #215";
      address3 = "Salina, KS 67401";
      address4 = "don.merriman@saline.org";
      break;
      case 86:
      address1 = "Alice Brokofsky";
      address2 = "303 Court";
      address3 = "Scott City, KS 67871";
      address4 = "SC_county_clerk@wan.kdor.state.ks.us";
      break;
      case 87:
      address1 = "Tabitha Lehman";
      address2 = "510 N Main";
      address3 = "Wichita, KS 67203-3798";
      address4 = "tlehman@sedgwick.gov";
      break;
      case 88:
      address1 = "Stacia D. Long";
      address2 = "515 N Washington Ste 100";
      address3 = "Liberal, KS 67901";
      address4 = "slong@sewardcountyks.org";
      break;
      case 89:
      address1 = "Andrew Howell";
      address2 = "3420 SW Van Buren";
      address3 = "Topeka, KS 66611";
      address4 = "electionoffice@snco.us";
      break;
      case 90:
      address1 = "Heather Bracht";
      address2 = "P.O. Box 899";
      address3 = "Hoxie, KS 67740";
      address4 = "sdcoclk@ruraltel.net";
      break;
      case 91:
      address1 = "Ashley Mannis";
      address2 = "813 Broadway, Rm 102";
      address3 = "Goodland, KS 67735";
      address4 = "amannis@shermancounty.org";
      break;
      case 92:
      address1 = "Sharon Wolters";
      address2 = "218 S Grant";
      address3 = "Smith Center, KS 66967";
      address4 = "sm_county_clerk@wan.kdor.state.ks.us";
      break;
      case 93:
      address1 = "Nita Keenan";
      address2 = "209 N Broadway";
      address3 = "St. John, KS 67576";
      address4 = "coclerk@gbta.net";
      break;
      case 94:
      address1 = "Sandy Barton";
      address2 = "PO Box 190";
      address3 = "Johnson, KS 67855";
      address4 = "ST_county_clerk@wan.kdor.state.ks.us";
      break;
      case 95:
      address1 = "Pam Bensel";
      address2 = "200 E 6th";
      address3 = "Hugoton, KS 67951";
      address4 = "SV_county_clerk@wan.kdor.state.ks.us";
      break;
      case 96:
      address1 = "Debra Norris";
      address2 = "501 N Washington";
      address3 = "Wellington, KS 67152";
      address4 = "dnorris@co.sumner.ks.us";
      break;
      case 97:
      address1 = "Shelly Harms";
      address2 = "300 N Court";
      address3 = "Colby, KS 67701";
      address4 = "TH_county_clerk@wan.kdor.state.ks.us";
      break;
      case 98:
      address1 = "Lori Augustine";
      address2 = "216 Main";
      address3 = "WaKeeney, KS 67672";
      address4 = "TR_county_clerk@wan.kdor.state.ks.us";
      break;
      case 99:
      address1 = "Jennifer Savage";
      address2 = "PO Box 278";
      address3 = "Alma, KS 66401";
      address4 = "jensavage@embarqmail.com";
      break;
      case 100:
      address1 = "Jacalyn Mai";
      address2 = "PO Box 70";
      address3 = "Sharon Springs, KS 67758";
      address4 = "WA_county_clerk@wan.kdor.state.ks.us";
      break;
      case 101:
      address1 = "Denae Jueneman";
      address2 = "214 C St";
      address3 = "Washington, KS 66968";
      address4 = "WS_county_clerk@wan.kdor.state.ks.us";
      break;
      case 102:
      address1 = "Lynda Goodrich";
      address2 = "PO Drawer 968";
      address3 = "Leoti, KS 67861";
      address4 = "coclerk@wbsnet.org";
      break;
      case 103:
      address1 = "Rhonda Willard";
      address2 = "615 Madison";
      address3 = "Fredonia, KS 66736";
      address4 = "wilsoncoclerk1@twinmounds.com";
      break;
      case 104:
      address1 = "Denice Julian";
      address2 = "105 W Rutledge Room 103";
      address3 = "Yates Center, KS 66783";
      address4 = "wococlerk@woodsoncounty.net";
      break;
      case 105:
      address1 = "Bruce Newby";
      address2 = "850 State Avenue";
      address3 = "Kansas City, KS 66101";
      address4 = "bnewby@wycokck.org";
      break;
    }
    console.log(address1);
    console.log(address2);
    console.log(address3);
    console.log(address4);
  });

});
