import smtplib
##from email.message import EmailMessage
import ssl
import random
from flask import Flask,url_for,redirect,render_template,request,flash,session,jsonify
#from tkinter import messagebox
# from flask_mysqldb import MySQL
import mysql.connector
import hashlib
# from validate_email_address import validate_email

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="Angel@6729",
  database='user_authentication'
)
cursor=mydb.cursor()



app=Flask(__name__, static_folder='static')

sender ='evilangel2710@gmail.com'
a=random.randint(100000,999999)
email_password='rsps fduy takh xhmv'

# app.config['MYSQL_HOST'] = 'localhost'
# app.config['MYSQL_USER'] = 'root'
# app.config['MYSQL_PASSWORD'] = 'Angel@6729'
# app.config['MYSQL_DB'] = 'user_authentication'

# mysql = MySQL(app)

app.config['SECRET_KEY'] = 'your_secret_key'

name=''

def record_exists(email):
##    cursor = mysql.connection.cursor()
    cursor=mydb.cursor()
    cursor.execute('SELECT * FROM users WHERE email=%s', (email,))
    user = cursor.fetchone()
    cursor.close()
    return user is not None

##def fun():
##    cursor = mysql.connection.cursor() 
##    cursor.execute("SELECT name FROM users WHERE name=%s",('yakesh',))
##    username= cursor.fetchone()
##    for i in username:
##        uname = i
##    
##        return str(i)

# def is_email_valid(email):
#     # Check if the email has a valid syntax and domain
#     return validate_email(email)


@app.route('/')
def home():      
        # flash('logged out','error')     
        return render_template('Daily Kozhi.html')

@app.route('/logout')
def logout():
     # Clear the session to log the user out
     session.pop('name', None)
     flash('Logged out', 'success')
     return redirect(url_for('home'))

##@app.route('/order')
##def order():
##    return render_template('login.html')

@app.route('/log')
def log():
    if not session.get('name'):
        return render_template('login.html')
    else:
        return redirect('/profile')


@app.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':
        global username
        username = request.form['username']
        password = request.form['password']
        
        hashed_password = hashlib.md5(password.encode()).hexdigest()
        
##        cursor = mysql.connection.cursor()       
        cursor=mydb.cursor()
        cursor.execute('SELECT * FROM users WHERE name = %s AND password = %s', (username,hashed_password))
        user = cursor.fetchone()

        if user:
            flash('Logged in', 'success')
            session['name']=username
            return redirect('/')
        else:
            flash('Login failed. Please check your name and password.', 'error')
            return redirect(url_for('log'))

@app.route('/forget password')
def forget_password():
    return render_template('forget_password.html')

@app.route('/send otp' ,methods=['GET','POST'])
def send_otp():
    if request.method=='POST':
        global email
        email=request.form['email']
        
        if record_exists(email):
            context=ssl.create_default_context()
            reciever = email
            message = f'''From:Daily Kozhi
To:{email}
Subject:OTP Verification

Hi {session.get('name')},

Your OTP is {a}
Don't share with anyone.

Thank You
'''
            with smtplib.SMTP_SSL('smtp.gmail.com',465,context=context) as smtp:
                smtp.login(sender,email_password)
                smtp.sendmail(sender,reciever,message)
                return render_template('forget_password.html',email=email)
        else:
            flash('The EMAIL is not exists')
            return redirect(url_for('forget_password'))
            
@app.route('/change_password',methods=['GET','POST'])
def change_password():
    if request.method=='POST':
        otp=request.form['otp']
        if str(a)==otp:
            return render_template('change password.html',email=email)
        else:
            flash('You have entered wrong OTP','error')
            return redirect(url_for('forget_password'))

@app.route('/change',methods=['GET','POST'])
def change():
    if request.method=='POST':
        email=request.form['email']
        password=request.form['password']
        confirm_password=request.form['confirm_password']
        hashed_password = hashlib.md5(password.encode()).hexdigest()
        if password==confirm_password:
            sql='update users set password=%s where email=%s'
            val=(hashed_password,email)
##            cursor = mysql.connection.cursor()
            cursor=mydb.cursor()
            cursor.execute(sql,val)
##            mysql.connection.commit()
            mydb.commit()
            flash('password changed successfully')
            return redirect(url_for('log'))
        else:
            flash('please fill the correct password','error')
            return render_template('change password.html')

@app.route('/signup')
def signup():
    return render_template('register.html')

@app.route('/otp',methods=['GET','POST'])
def otp():
    if request.method=='POST':
        global name
        name=request.form['name']
        session['name']=name
        global phone_number
        phone_number=request.form['number']
        global email
        email=request.form['email']
        global password
        password=request.form['password']
        global address
        address=request.form['address']
        # if not is_email_valid(email):
        #     # If email is not valid, return a response indicating it
        #     # return jsonify({'message': 'Invalid email address'}), 400
        #     flash('Email does not exist', 'error')
        #     return redirect(url_for('signup'))
        if record_exists(email):
            flash('Email already exists', 'error')
            return redirect(url_for('signup'))
        else:
            context=ssl.create_default_context()
            reciever = email
            message = f'''From:Daily Kozhi
To:{email}
Subject:OTP Verification

Hi {session.get('name')},

Your OTP is {a}
Don't share with anyone.

Thank You
'''
            with smtplib.SMTP_SSL('smtp.gmail.com',465,context=context) as smtp:
                smtp.login(sender,email_password)
                smtp.sendmail(sender,reciever,message)
            
            return render_template('otp.html')
    return render_template('register.html')

@app.route('/verify',methods=['GET','POST'])
def verify():
    if request.method=='POST':
        otp=request.form['otp']
        if str(a)==otp:
            hashed_password = hashlib.md5(password.encode()).hexdigest()
            sql='insert into users(name,phone_number,email,password,address) values(%s,%s,%s,%s,%s)'
            val=(name,phone_number,email,hashed_password,address)
##            cursor = mysql.connection.cursor()
            cursor.execute(sql,val)
##            mysql.connection.commit()
            mydb.commit()
            #messagebox.showinfo('logged in',f'welcome to our website {name}')
            return redirect('/')
        else:
            flash('you have entered wrong OTP, Please enter valid OTP', 'error')
            #messagebox.showerror('invalid OTP','you have entered wrong OTP')
            return redirect(url_for('verify'))
    return render_template('otp.html')

@app.route('/profile')
def profile():
##    cursor = mysql.connection.cursor()
    cursor=mydb.cursor()
    cursor.execute('SELECT * FROM users WHERE name=%s', (session.get('name'),))
    user = cursor.fetchone()
    cursor.close()
    data_name=user[1]
    data_address=user[-1]
    data_phone_number=user[-3]
    data_email=user[2]
    return render_template('profile.html',data_name=data_name,data_address=data_address,data_phone_number=data_phone_number,data_email=data_email)

@app.route('/wishlist')
def wishlist():
    return render_template('Daily Kozhi Wishlist.html')

@app.route('/basket')
def basket():
    return render_template('cart.html')


@app.route('/order')
def order():
    if not session.get('name'):
        return render_template('login.html')
    else:
        return redirect('/placeOrder')


@app.route('/placeOrder', methods=['POST'])
def place_order():
    if not session.get('name'):
        return redirect('/login')
    else:
        
        # Get data from the request
            data = request.get_json()
            user_name = data['userName']
            user_address = data['userAddress']
            user_rate = data['userRate']
            items = data['items']

        # Create a MySQL cursor
##            cur = mysql.connection.cursor()
            cursor=mydb.cursor()

        # Insert order into the orders table
            cursor.execute('INSERT INTO orders (userName, userAddress, userRate) VALUES (%s, %s, %s)',
                    (user_name, user_address, user_rate))
##            mysql.connection.commit()
            mydb.commit()
        # Get the order ID
            order_id = cursor.lastrowid
            data_name=session.get('name')
            
        # Insert order items into the order_items table
            for item in items:
                cursor.execute('INSERT INTO order_items (orderId, itemName, quantity,rate,address,name) VALUES (%s,%s, %s, %s,%s,%s)',
                        (order_id, item['name'], item['quantity'],item['price'],user_address,data_name))
##                mysql.connection.commit()
                mydb.commit()

        # Close the cursor

            cursor.execute('SELECT email FROM users WHERE name=%s', (session.get('name'),))
            email = cursor.fetchone()
            cursor.execute('SELECT itemName,quantity FROM order_items WHERE orderId=%s',(order_id,))
            item=cursor.fetchall()
            cursor.close()
            context=ssl.create_default_context()
            reciever = email
            message = f'''From:Daily Kozhi
To:{email}
Subject:Order Confirmation
Hi {session.get('name')},

Your order has been placed successfully.

Your orders {item} will arrive you in 10 minutes.

Thank You
'''
            with smtplib.SMTP_SSL('smtp.gmail.com',465,context=context) as smtp:
                smtp.login(sender,email_password)
                smtp.sendmail(sender,reciever,message)

            return jsonify({'message': 'Order placed successfully!'})

##        except Exception as e:
##            print(e)
    return jsonify({'message': 'Error placing order.'}), 500

##@app.route('/go')
##def go():
##    return render_template('Daily Kozhi.html')


if __name__=='__main__':
    app.run(debug=True)
    














## app.py

##from flask import Flask, render_template
##
##app = Flask(__name__)
##
##@app.route('/')
##def index():
##    return render_template('index.html')
##
##if __name__ == '__main__':
##    app.run(debug=True)


















