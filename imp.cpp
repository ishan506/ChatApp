 //operator overloading with a friend function.
 #include<iostream>
 using namespace std;
class Animal {
    private:
    int n=2;

friend ostream & operator<<(ostream &out , const Animal &obj  );
};
ostream & operator<<(ostream &out , const Animal &obj  ){
     out<<obj.n;
return out;
}

 int main(){
Animal obj;
cout<<obj;
 }