#include <iostream>
using namespace std;
class node
{
    public:
    int data;
    node *next;
     node(int data)
    {
        this->data = data;
        this->next = NULL;
    }
};
 node * reverse (node *& head){
 node * prev = NULL;
 node * curr = head;
 
 while(curr !=NULL){
   node* forward = curr->next;
    curr->next = prev ;
 prev = curr ;
 curr = forward ;
 }
 return prev;
 }
 bool p (node *&head){
    
    node * slow = head;
   node * fast = head;
    while (fast->next != NULL && fast->next->next != NULL)
    {
        fast = fast->next->next;
        slow = slow->next;
    }
   
   




   

node*reversehead = reverse(slow->next);
 slow->next = reversehead;

    node *check1 = head;
    node *check2 = reversehead;
    while( check2  != NULL){
     if (  check1->data == check2->data)
    {
        check1 = check1->next;
        check2 = check2->next;
    }
    else{
      return false;
    }
  
}
  return true ;
        
 }
void print(node *&head)
{
    node *temp = head;
    cout << temp->data;
    temp = temp->next;
}

int main()
{
    node obj(12);
    node * head =new node(4);
    node * second = new node(6);
    node* third = new node(6);
      node* four = new node(4);
    head->next = second;
    second->next = third;
    third->next = four;
     four->next = NULL;
     bool pal = p(head) ;
      if(pal){
        cout<<"l";
      }
      else {
        cout<<"n";
      }
}