<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('lift_managers', function (Blueprint $table) {
            $table->id();
            $table->string('name', 128);
            $table->string('reg_number', 64);
            $table->string('address', 128);
            $table->string('contract_number', 128)->nullable();
            $table->string('contract_date', 128)->nullable();
            $table->string('contact_person', 128)->nullable();
            $table->string('contact_person_position', 128)->nullable();
            $table->string('contact_person_phone', 64)->nullable();
            $table->string('contact_person_phone_bill', 64)->nullable();
            $table->string('email_for_docs', 64)->nullable();
            $table->string('bank_name', 64)->nullable();
            $table->string('bank_code', 64)->nullable();
            $table->string('bank_account', 64)->nullable();
            $table->string('bill_pay_days', 64)->nullable();
            $table->boolean('protocol_with_electric_measurments', 64)->default(false);
            $table->text('notes')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lift_managers');
    }
};
