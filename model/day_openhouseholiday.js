var week = 6;
const monthday = [0,31,28,31,30,31,30,31,31,30,31,30,31]

function holiday() {
    var date = [16,10,2021];
    var ans=date;
    for (let index = 0; index < 120; index++) {
        if (week < 5) {
            if (ans[0] == monthday[12] && ans[1] == 12) {
                ans[0] = 1;
                ans[1] = 1;
                ans[2]++;
            }
            else if (ans[0] == 28 && ans[1] ==2 && ans[2]%4 == 0) {
                ans[0]++;
            }
            else if (ans[0] >= monthday[ans[1]]) {
                ans[0]=1;
                ans[1]++;  
            }
            
            else if (ans[0] <monthday[ans[1]]) {
                ans[0]++;
            }
        }
        else if (week == 7) {
            week =0;
        }
        week++;   
    }
    // console.log(ans[0] +" "+ans[1]+" "+ans[2]);
    return ans;
}

module.exports = holiday;