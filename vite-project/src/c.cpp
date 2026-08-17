class Solution {
public:
int rec(vector<int>& stoneValue , int start , int end){
 int i=0;
 int ans=0;
          int mini =INT_MAX;
        if(start==end){
            return 0; 
        }
        
     
       
        for(int mid = start; mid < end; mid++) {
             int left =0;
      int right =0;
for( i=start ;i<= mid ;i++){
     left += stoneValue[i];

}
for(int i=mid+1 ;i<=end;i++){
    right += stoneValue[i];
}
        
if(left<right){

  
ans = max(ans , left +rec(stoneValue, start , mid ));
}
else if (left > right){
ans = max(ans , right +rec(stoneValue, mid+1 , end ));
}
else{
 ans = max(ans , left+ max (rec(stoneValue, start , mid ), rec(stoneValue, mid+1 , end)));
} 
        }
return ans ;

}
    int stoneGameV(vector<int>& stoneValue) {
       int start=0;
        int end =stoneValue.size()-1;
return rec(stoneValue,start,end);

    }
};