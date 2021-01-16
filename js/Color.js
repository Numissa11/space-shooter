let color = ['#D78521', '#F24C00', '#3F2E56', '#C1FF9B', '#1A936F', '#114B5F', '#FFE548', '#759AAB', '#FF4B3E', '#88D498', '#DF7373', '#453F78', '#AB92BF', '#DE1A1A', '#E55934', '#91C7B1', '#B33951', '#634B66', '#157A6E', '#9590A8', '#FF9F1C', '#D9594C', '#D78521', '#F24C00', '#3F2E56', '#C1FF9B', '#1A936F', '#114B5F', '#FFE548', '#759AAB', '#FF4B3E', '#88D498', '#DF7373', '#453F78', '#AB92BF', '#DE1A1A', '#E55934', '#91C7B1', '#B33951', '#634B66', '#157A6E', '#9590A8', '#FF9F1C', '#D9594C']
let i = 0;

function colorSelector() {
      quotegen();
      i = 0 < color.length ? ++i : 0;

      $('#playWindow').css({
            "background-color": color[i]
      });

      $('.wrapper').css({
            "background-color": color[i]
      });
      $('.quotebox').css({
            "color": ''
      });

}

function white() {

      $('#playWindow').css({
            "background-color": 'white'
      });

      $('.wrapper').css({
            "background-color": 'white'
      });

      $('.quotebox').css({
            "color": 'white'
      });
}